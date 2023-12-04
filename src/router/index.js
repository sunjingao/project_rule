import { createRouter, createWebHashHistory } from 'vue-router';

const asyncRoutes = [
  {
    path: '/use/',
    title: '开始使用',
    children: [
      {
        path: '/use/des',
        title: '概述',
        isDefaultActive: true,
        component: { render: (e) => e('router-view') }
      }
    ]
  },
  {
    path: '/git/',
    title: '分支规范',
    children: [
      {
        path: '/git/submit',
        title: '分支规范',
        component: { render: (e) => e('router-view') }
      },
      {
        path: '/git/commitLint',
        title: 'CommitLint配置',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/code/',
    title: '代码规范',
    children: [
      {
        path: '/code/js',
        title: 'JS规范',
        component: { render: (e) => e('router-view') }
      },
      {
        path: '/code/css',
        title: 'css规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/flow/',
    title: '流程规范',
    children: [
      {
        path: '/flow/flow',
        title: '流程规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/project/',
    title: '项目规范',
    children: [
      {
        path: '/project/name',
        title: '命名规范',
        component: { render: (e) => e('router-view') }
      },
      {
        path: '/project/write',
        title: '编写规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/framework/',
    title: '架构规范',
    children: [
      {
        path: '/framework/framework',
        title: '架构规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/selection/',
    title: '选型规范',
    children: [
      {
        path: '/selection/selection',
        title: '选型规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/review/',
    title: '评审规范',
    children: [
      {
        path: '/review/review',
        title: '评审规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
  {
    path: '/interface/',
    title: '接口规范',
    children: [
      {
        path: '/interface/interface',
        title: '接口规范',
        component: { render: (e) => e('router-view') }
      },
    ]
  },
];

const routes = [
  ...asyncRoutes,
  {
    path: '/:catchAll(.*)',
    redirect: { path: '/use/des' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(
  (to, from, next) => {
    next();
  }
);

export {
  asyncRoutes,
  router
};
