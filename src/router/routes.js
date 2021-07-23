
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Landing.vue')
      },
      { 
        path: '/artiklar', 
        component: () => import('src/pages/intranet_pages/Articles.vue') 
      },
      { 
        path: '/redaktionsöversikten', 
        component: () => import('src/pages/intranet_pages/Pipeline.vue') 
      },
      {
        path: '/granskning',
        component: () => import('src/pages/intranet_pages/Review.vue')
      },
      {
        path: '/nyheter',
        component: () => import('src/pages/intranet_pages/News.vue')
      },
      {
        path: '/it-todo',
        component: () => import('src/pages/intranet_pages/ToDo.vue')
      },
      {
        path: '/rapportera',
        component: () => import('src/pages/intranet_pages/Report.vue')
      },
      {
        path: '/chatt',
        component: () => import('src/pages/intranet_pages/Chat.vue')
      },
      {
        path: '/inställningar',
        component: () => import('src/pages/intranet_pages/Settings.vue')
      }
    ]
  },
  {
    path: '/editor/',
    component: () => import('layouts/EditorLayout.vue'),
    children: [
      {
        path: ':article_id',
        component: () => import('pages/tools/EditorPage.vue')
      },
      {
        path: ':article_id/förhandsgranskning',
        component: () => import('pages/tools/Preview.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('pages/login/Login.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
