const PageMain = () => import(/* webpackChunkName: 'PageMain' */ 'Pages/PageMain');
const PageUiKit = () => import(/* webpackChunkName: 'PageUiKit' */ 'Pages/PageUiKit');
const PageTeam = () => import(/* webpackChunkName: 'PageTeam' */ 'Pages/PageTeam');

export default [
  {
    path: '/',
    name: 'home',
    component: PageMain,
  },
  {
    path: '/home',
    redirect: { name: 'home' },
  },
  {
    path: '/team',
    name: 'team',
    component: PageTeam,
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
