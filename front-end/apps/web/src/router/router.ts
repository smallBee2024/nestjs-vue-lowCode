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
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: () => import('@/views/error/404'),
  //   hidden: true
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/views/error/401'),
  //   hidden: true
  // },
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/index',
  //   children: [
  //     {
  //       path: '/index',
  //       component: () => import('@/views/index'),
  //       name: 'Index',
  //       meta: { title: '首页', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'profile',
  //       component: () => import('@/views/system/user/profile/index'),
  //       name: 'Profile',
  //       meta: { title: '个人中心', icon: 'user' }
  //     }
  //   ]
  // }
]

// 未匹配到路由时显示的页面
export const noMatchRoute = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/exception/404.vue'),
}