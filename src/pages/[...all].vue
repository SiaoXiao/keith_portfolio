<template>
    <main
        class="min-h-[calc(100vh-190px)] pt-20 flex flex-col items-center justify-center bg-background"
    >
        <!-- 404 標題 -->
        <h1 class="leading-none">
            <span class="text-7xl sm:text-8xl font-black text-primary">4</span>
            <span class="text-7xl sm:text-8xl font-black text-accent-gold"
                >0</span
            >
            <span class="text-7xl sm:text-8xl font-black text-primary">4</span>
        </h1>

        <!-- 說明 -->
        <p class="mt-4 text-[15px] leading-7 text-secondary-slate">
            找不到這個頁面：<span class="font-mono text-zinc-700">{{
                route.fullPath
            }}</span>
        </p>
        <p class="mt-1 text-[15px] leading-7 text-zinc-700">
            可能連結已更改或被移除。
        </p>
        <!-- 動作按鈕 -->
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
            <RouterLink
                to="/"
                class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-secondary-indigo text-white hover:opacity-90"
            >
                回到首頁
            </RouterLink>
            <button
                type="button"
                @click="goBack"
                class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border border-zinc-300/80 hover:bg-zinc-50"
            >
                上一頁
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

/**
 * 返回上一頁；若無歷史則回首頁
 */
const goBack = () => {
    if (window.history.length > 1) {
        router.back()
    } else {
        router.push('/')
    }
}
</script>
