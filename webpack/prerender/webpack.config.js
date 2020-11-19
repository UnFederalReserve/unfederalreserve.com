const path = require('path');
const fs = require('fs');
const request = require('sync-request');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const additionalRoutes = require('./additional-routes');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
let routes = [];

if (process.env.URL !== undefined) {
  routes.push(process.env.URL);
} else {
  try {
    // Get sitemap
    const locRegExp = /<loc>https?:\/\/((www)\.)?site-name\.(net|com)(\/\S*)+<\/loc>/g;
    console.log(`getting sitemap from ${process.env.CMS_URL}/sitemap.xml?refresh=1`);
    const res = request('GET', `${process.env.CMS_URL}/sitemap.xml?refresh=1`);
    const sitemap = res.getBody('utf8');
    // Parse loc
    let parsed = sitemap.match(locRegExp);
    console.log(`${parsed.length} urls parsed from sitemap`);
    // Get relative url from loc
    parsed = parsed.map(route => route.match(new RegExp(locRegExp.source))[4]);
    console.log(`${parsed.length} routes parsed from sitemap`);
    // filter urls to file
    routes = parsed.filter(url => !/\.(?!(html?|php)).{3,4}$/.test(url));
    console.log(`${routes.length} routes filtered`);
    console.log(`${additionalRoutes.length} hardcoded routes`);
    routes = routes.concat(additionalRoutes);
    // Write parsed routes on disk for move-prerender script
    fs.writeFile(
      path.resolve('prerender-routes.json'),
      JSON.stringify(routes, null, 2),
      'utf8',
      () => console.log(`${routes.length} routes saved to file prerender-routes.json`),
    );
  } catch (e) {
    console.log(e);
  }
}

// Getting js version from json file from CDN
let jsVersion = '';
try {
  const currentVersionFilePath = path.resolve('dist/current-version.json');
  if (fs.existsSync(currentVersionFilePath)) {
    const rawFile = fs.readFileSync(currentVersionFilePath);
    jsVersion = JSON.parse(rawFile).trim();
    console.log('JS bundle version: ', jsVersion);
  }
} catch (e) {
  console.log(e);
}

module.exports = {
  entry: path.resolve('webpack/prerender/stub.js'),
  output: {
    path: path.resolve('webpack/prerender'),
    filename: 'builded_stub.js',
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.resolve('dist'),
      outputDir: path.resolve('prerendered'),
      routes,
      indexPath: path.resolve('dist/index.html'),
      minify: {
        collapseWhitespace: false,
        minifyCSS: true,
        sortAttributes: false,
        collapseBooleanAttributes: false,
        decodeEntities: false,
      },
      postProcess(context) {
        // Save file as initial route but not redirected
        // excluding home page.
        if (context.route !== '/') {
          Object.assign(context, {
            route: context.originalRoute,
          });
        }
        let { html } = context;
        // Try to get js hash from file
        // const jsHash = html.match(/js\/vendors~app\.(\d|\w{20})\.js/);
        // If has found
        // if (jsHash && jsHash[1]) {
        //   const hash = jsHash[1];
        // Clear js files which added by main app.js file
        // eslint-disable-next-line
        const regex = new RegExp(`<script\\s(?!type="?module"?).*?src="?\/js\/.*?\.js"?><\/script>`, 'g');
        html = html.replace(regex, '');
        // const regex = new RegExp(`<script.+?\/js\/.+?(.${hash})?.js.{0,5}<\/script>`, 'g');
        // html = html.replace(regex, '');
        // }
        // Add preload tag for css files
        const cssMatch = html.match(/\/css\/(?!app|vendors~app)([\w\d~]*)(\.\d{10})?.css/gi);
        if (cssMatch) {
          let preloadCssTags = '';
          cssMatch.forEach((cssUrl) => {
            preloadCssTags += `<link href="${cssUrl}" rel="preload" as="style">`;
          });
          const position = html.indexOf('<script>');
          html = html.slice(0, position) + preloadCssTags + html.slice(position);
        }
        // Remove useless inline styles
        // html = html.replace(/<style.*?id="vuetify-theme-stylesheet".*?<\/style>/gs, '');
        // For HomePage
        // if (context.route === '/') {
          // Set page is prerendered and hydration
        //  html = html.replace('id="app"', 'id="app" data-server-rendered="true"');
        //  html = html.replace('window.__prerendered = false', 'window.__prerendered = true; window.__hydration = true');
        // } else {

          // Set page is prerendered
        html = html.replace('window.__prerendered = false', 'window.__prerendered = false');
        // }
        // If jsVersion exist, inject into html
        if (jsVersion) {
          html = html.replace('window.__jsVersion = null;', `window.__jsVersion = '${jsVersion}';`);
        }
        Object.assign(context, { html });
        return context;
      },
      renderer: new Renderer({
        injectProperty: '__prerender',
        renderAfterDocumentEvent: 'render-ready',
        // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
        inject: {},
        maxConcurrentRoutes: 12,
        // defaultViewport: {
        //   width: 375,
        //   height: 812,
        // },
        // skipThirdPartyRequests: true,
        // headless: false,
        // devtools: true,
        consoleHandler: async (route, consoleMessage) => {
          if (consoleMessage._type !== 'error') return;
          console.log(' ');
          console.log('route: ', route);
          console.log('  error text: ', consoleMessage._text);
        },
      }),
    }),
  ],
};
