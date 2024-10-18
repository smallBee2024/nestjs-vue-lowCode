import { type RouteRecordRaw } from 'vue-router'
/* Layout */
// import Layout from '@/layout'

// 公共路由
export const constantRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       // component: () => import('@/views/redirect/index.vue')
  //     }
  //   ]
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
  },
]

// 动态路由
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'indexPage',
        component: () => import('@/views/Index/index.vue'),
      },
      {
        path: '/apply',
        name: 'Apply',
        component: () => import('@/views/Apply/index.vue'),
      },
    ]
  },
]

// 未匹配到路由时显示的页面
export const noMatchRoute = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/exception/404.vue'),
}