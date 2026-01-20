<template>
  <AppHeader :menuArray="menuList" class="left-1/2 -translate-x-1/2"></AppHeader>
 <RouterView />
  <AppFooter class="mx-auto"></AppFooter>
  <div class="scrollBtn" :class="{ isActive }" @click.passive="handleScrollTop">
    Top
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { onMounted, onUnmounted, ref, reactive } from "vue";

const menuList = reactive([
  {
    to: "/works",
    tag: "工作經驗",
    span: "Works",
  },
  {
    to: "/about",
    tag: "關於我",
    span: "About",
  }
]);

// 滾輪按鈕開關
const isActive = ref(false);

// 顯示滾輪按鈕
const handleScroll = () => {
  if (window.scrollY >= 100) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
};

// 回到最上層
const handleScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
// App.vue init
const init = onMounted(async () => {
  // 新增滾輪監聽事件
  window.addEventListener("scroll", handleScroll);
  document.oncontextmenu = function () {
    return false;
  };
});

// 移除滾輪監聽事件
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
