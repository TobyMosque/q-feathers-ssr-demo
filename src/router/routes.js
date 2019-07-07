
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main/Index.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth/',
    component: () => import('layouts/Auth/Index.vue'),
    children: [
      { path: 'login', component: () => import('pages/LogIn/Index.vue') },
      { path: 'signup', component: () => import('pages/SignUp/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
