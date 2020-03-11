import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '工作台', icon: 'dashboard' }
    }]
  },

  {
    path: '/userInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'userInfo',
        component: () => import('@/views/userinfo/index'),
        meta: { title: '用户信息管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/seatInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'seatInfo',
        component: () => import('@/views/seatinfo/index'),
        meta: { title: '席位信息管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/idInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'idInfo',
        component: () => import('@/views/idinfo/index'),
        meta: { title: '身份信息管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/plugInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'plugInfo',
        component: () => import('@/views/pluginfo/index'),
        meta: { title: '插件信息管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/systemSet',
    component: Layout,
    redirect: '/example/table',
    name: 'systemSet',
    meta: { title: '平台系统设置', icon: 'example' },
    children: [
      {
        path: 'loginManagement',
        name: 'loginManagement',
        component: () => import('@/views/system-set/login-management/index'),
        meta: { title: '登陆管理', icon: 'table' }
      },
      {
        path: 'keysetManagement',
        name: 'keysetManagement',
        component: () => import('@/views/system-set/keyset-management/index'),
        meta: { title: '快捷键设置管理', icon: 'table' }
      },
      {
        path: 'comManagement',
        name: 'cominManagement',
        component: () => import('@/views/system-set/com-management/index'),
        meta: { title: '组件管理', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
