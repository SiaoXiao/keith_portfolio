<template>
    <main
        class="mx-auto min-h-[calc(100vh-190px)] max-w-6xl px-4 sm:px-6 lg:px-8 lg:pt-28 pt-16 pb-12"
    >
        <!-- Hero -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- 左：標題 -->
            <div class="lg:col-span-7">
                <h1
                    class="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary"
                >
                    Keith Lee
                </h1>
                <p class="mt-3 text-lg text-secondary-slate">
                    Frontend Engineer / 前端工程師
                </p>
                <p class="mt-4 text-[15px] leading-7 text-zinc-700">
                    把複雜需求變成好用、可維護的介面。專注效能、資料驅動與設計系統落地。
                </p>

                <div class="mt-6 flex flex-wrap items-center gap-3">
                    <RouterLink
                        v-if="false"
                        to="/projects"
                        class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-secondary-indigo text-white hover:opacity-90"
                    >
                        看作品集
                    </RouterLink>
                    <a
                        href="mailto:aa242013759@hotmail.com"
                        class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-secondary-indigo text-white hover:opacity-90"
                    >
                        聯繫我
                    </a>
                    <!-- <button @click="clickme">click</button>
                    <button @click="makeTiast">click</button> -->
                </div>

                <!-- 社群 -->
                <div class="mt-5 flex items-center gap-3">
                    <a
                        href="https://github.com/SiaoXiao"
                        aria-label="GitHub"
                        class="group p-2 rounded-full border border-zinc-300/80 hover:bg-zinc-50"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="h-5 w-5 text-primary group-hover:text-secondary-slate fill-current"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.55-.36.86 0 1.74.12 2.55.36 1.95-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.08.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .26.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-id"
                        aria-label="LinkedIn"
                        class="group p-2 rounded-full border border-zinc-300/80 hover:bg-zinc-50"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="h-5 w-5 text-primary group-hover:text-secondary-slate fill-current"
                            aria-hidden="true"
                        >
                            <path
                                d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8 8.98h4.8v2.05h.07c.67-1.27 2.31-2.6 4.76-2.6 5.1 0 6.04 3.36 6.04 7.73V24h-5v-6.53c0-1.56-.03-3.56-2.17-3.56-2.18 0-2.51 1.7-2.51 3.45V24H8z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- 右：頭像 -->
            <div class="lg:col-span-5 flex lg:justify-end">
                <div
                    class="size-40 sm:size-48 rounded-full overflow-hidden ring-4 ring-white shadow"
                >
                    <img
                        src="@/assets/image/IMG_2554.jpeg"
                        alt="Keith Lee"
                        class="w-full h-full object-cover block"
                    />
                </div>
            </div>
        </section>

        <!-- 重點數字 -->
        <section
            class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl bg-background p-4 border"
        >
            <div>
                <div class="text-2xl font-semibold text-primary">5+ 年</div>
                <div class="text-xs text-secondary-slate">前端（Vue 生態）</div>
            </div>
            <div>
                <div class="text-2xl font-semibold text-primary">更快首屏</div>
                <div class="text-xs text-secondary-slate">
                    懶載入 / 資產壓縮 / 圖片優化
                </div>
            </div>
            <div>
                <div class="text-2xl font-semibold text-primary">多個模組</div>
                <div class="text-xs text-secondary-slate">
                    上傳/驗證、表單流程、資料段
                </div>
            </div>
            <div>
                <div class="text-2xl font-semibold text-primary">資料驗證</div>
                <div class="text-xs text-secondary-slate">
                    事件追蹤、前後對比、用戶回饋
                </div>
            </div>
        </section>

        <!-- 代表作品 -->
        <section v-if="false" id="projects" class="mt-12">
            <div class="flex items-end justify-between">
                <h2 class="text-2xl font-bold text-primary">代表作品</h2>
                <RouterLink
                    to="/projects"
                    class="text-secondary-indigo hover:underline text-sm"
                    >更多 →</RouterLink
                >
            </div>

            <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <article class="rounded-xl border p-5 bg-white">
                    <h3 class="text-lg font-semibold text-primary">
                        Facility Submission（企業表單模組）
                    </h3>
                    <p class="mt-2 text-[15px] leading-7 text-zinc-700">
                        動態上傳、多檔驗證、跨頁抽屜；提交錯誤率
                        -35%，維護成本下降。
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2 text-xs">
                        <span class="px-2 py-1 rounded-md bg-background border"
                            >Vue 3</span
                        >
                        <span class="px-2 py-1 rounded-md bg-background border"
                            >Element Plus</span
                        >
                        <span class="px-2 py-1 rounded-md bg-background border"
                            >Tailwind</span
                        >
                    </div>
                    <RouterLink
                        to="/#projects"
                        class="mt-4 inline-block text-secondary-indigo hover:underline text-sm"
                        >查看詳情</RouterLink
                    >
                </article>

                <article class="rounded-xl border p-5 bg-white">
                    <h3 class="text-lg font-semibold text-primary">
                        Food Recommender（個人作品）
                    </h3>
                    <p class="mt-2 text-[15px] leading-7 text-zinc-700">
                        偏好標籤與資料集過濾；行動端轉換成長，體驗流暢。
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2 text-xs">
                        <span class="px-2 py-1 rounded-md bg-background border"
                            >Nuxt/Vue</span
                        >
                        <span class="px-2 py-1 rounded-md bg-background border"
                            >TypeScript</span
                        >
                        <span class="px-2 py-1 rounded-md bg-background border"
                            >Tailwind</span
                        >
                    </div>
                    <RouterLink
                        to="/#projects"
                        class="mt-4 inline-block text-secondary-indigo hover:underline text-sm"
                        >查看詳情</RouterLink
                    >
                </article>
            </div>
        </section>

        <!-- 經歷（快覽） -->
        <section id="experience" class="mt-12">
            <ExperienceTimeline :items="items" />
        </section>

        <!-- 技能 -->
        <section id="skills" class="mt-12">
            <h2 class="text-2xl font-bold text-primary">技能與關鍵字</h2>
            <div class="mt-4 flex flex-wrap gap-2">
                <span
                    v-for="(s, i) in skills"
                    :key="i"
                    class="px-3 py-1.5 rounded-full border text-sm bg-white"
                >
                    {{ s }}
                </span>
            </div>
        </section>

        <!-- CTA -->
        <section v-if="false" class="mt-14 rounded-2xl p-6 border bg-white">
            <div
                class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
                <div>
                    <h3 class="text-xl font-semibold text-primary">
                        想合作或交流嗎？
                    </h3>
                    <p class="mt-1 text-sm text-secondary-slate">
                        寄信給我或看看更多專案細節。
                    </p>
                </div>
                <div class="flex gap-3">
                    <a
                        href="mailto:aa242013759@hotmail.com"
                        class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-secondary-indigo text-white hover:opacity-90"
                        >Email 我</a
                    >
                    <RouterLink
                        to="/projects"
                        class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border hover:bg-zinc-50"
                        >更多作品</RouterLink
                    >
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import experiences from '@/data/experience.json'
import rawSkills from '@/data/skills.json'
import type { TSkills } from '@/types/skills'
import type { IExperience } from '@/types/experience'
// import * as Sentry from '@sentry/vue'
const skills = ref<TSkills[]>(rawSkills)
const items = ref<IExperience[]>(experiences)

// const clickme = () => {
//     throw new Error('click item error')
// }
// const makeTiast = () => {
//    ovo()
// }

// const post = {
//     id: 1,
//     title: 'Hello word',
//     body: 'yoyo~ ovo'
// }

// Sentry.setContext('post', post)
// Sentry.setTag('randomTag', 'hello-tag')

</script>
