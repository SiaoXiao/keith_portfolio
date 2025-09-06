import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocationNormalized } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/index.vue"),
    meta: {
      title: "首頁",
      name: "首頁",
    },
  },

  // {
  //   path: "/user",
  //   name: "User",
  //   component: () => import("../pages/user/index.vue"),
  //   meta: {
  //     title: "會員專區",
  //     name: "會員專區",
  //     requiresAuth: true,
  //   },
  //   children: [
  //     {
  //       path: "",
  //       name: "Homepage",
  //       component: () => import("../pages/user/homepage.vue"),
  //       meta: {
  //         title: "我的帳戶",
  //         name: "我的帳戶",
  //         requiresAuth: true,
  //       },
  //     },
  //     {
  //       path: "order",
  //       name: "Order",
  //       component: () => import("../pages/user/order.vue"),
  //       meta: {
  //         title: "訂單查詢",
  //         name: "訂單查詢",
  //         requiresAuth: true,
  //       },
  //     },
  //     {
  //       path: "discount",
  //       name: "Discount",
  //       component: () => import("../pages/user/discount.vue"),
  //       meta: {
  //         title: "專屬優惠",
  //         name: "專屬優惠",
  //         requiresAuth: true,
  //       },
  //     },
  //     {
  //       path: "like",
  //       name: "Like",
  //       component: () => import("../pages/user/like.vue"),
  //       meta: {
  //         title: "收藏清單",
  //         name: "收藏清單",
  //         requiresAuth: true,
  //       },
  //     },
  //   ],
  // },

  {
    path: "/about",
    name: "About",
    component: () => import("../pages/about.vue"),
    meta: {
      title: "關於我",
      name: "關於我",
    },
  },
  {
    path: "/works",
    name: "Works",
    component: () => import("../pages/works.vue"),
    meta: {
      title: "工作經驗",
      name: "工作經驗",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/[...all].vue"),
    meta: {
      title: "404 Not Found",
      name: "404 page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

type TitleMeta = string | ((to: RouteLocationNormalized) => string)

router.afterEach((to) => {
  const SITE_NAME = 'Keith Lee'

  const deepest = [...to.matched].reverse().find(r => r.meta?.title)

  let pageTitle: string | undefined
  const raw = deepest?.meta?.title as TitleMeta | undefined

  if (typeof raw === 'function') {
    pageTitle = raw(to)
  } else if (typeof raw === 'string') {
    pageTitle = raw
  }

  document.title = pageTitle ? `${pageTitle}｜${SITE_NAME}` : SITE_NAME
})

export default router;
