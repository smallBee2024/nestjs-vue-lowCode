import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { constantRoutes } from './router'
import { WhiteRouterList } from './config';

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  // 如果没有token，跳转到登录页
  if (!localStorage.getItem('token')) {
    if (WhiteRouterList.includes(to.path)) {
      next()
    } else if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    // 如果有token，跳转登录注册页面时，直接跳转到首页
    if (to.path === '/login' || to.path === '/register') {
      next({ path: '/' })
    }
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export default router;