const HowItWorksSection = () => import(/* webpackChunkName: 'HowItWorksSection' */ 'Components/HowItWorksSection/HowItWorksSection');
const PageMain = () => import(/* webpackChunkName: 'PageMain' */ 'Pages/PageMain');
const PageUiKit = () => import(/* webpackChunkName: 'PageUiKit' */ 'Pages/PageUiKit');

export default [
  {
    path: '/',
    name: 'home',
    component: PageMain,
  },
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/',
    name: 'How It Works',
    component: HowItWorksSection,
  },
  {
    path: '/ui',
    name: 'ui',
    component: PageUiKit,
  },
  {
    path: '*',
    redirect: { name: '404' },
  },
];
