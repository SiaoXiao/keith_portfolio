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

<style lang="scss" scoped>
.scrollBtn {
  position: fixed;
  width: 50px;
  height: 50px;
  background: #fafafa;
  color: #5f7470;
  bottom: 5%;
  right: 5%;
  border-radius: 5px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;
  font-size: 18px;
  line-height: 28px;
  font-weight: 800;
  letter-spacing: 0.05em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.scrollBtn.isActive {
  display: flex;
  animation: Scale 0.2s linear forwards;
  animation-iteration-count: 1;
}

@keyframes Scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
