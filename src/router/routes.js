const PageMain = () => import(/* webpackChunkName: 'PageMain' */ 'Pages/PageMain');
const PageUiKit = () => import(/* webpackChunkName: 'PageUiKit' */ 'Pages/PageUiKit');

export default [
  {
    path: '/',
    name: 'home',
    meta: {
      store: ['farm/getList'],
    },
    component: PageMain,
  },
  {
    path: '/home',
    redirect: { name: 'home' },
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
