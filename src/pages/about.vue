<template>
    <main
        class="mx-auto min-h-[calc(100vh-190px)] max-w-6xl px-4 sm:px-6 lg:px-8 lg:pt-28 pt-16 pb-12"
    >
        <!-- Hero -->
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-primary">關於我</h1>

            <!-- 英文簡介 -->
            <p class="mt-3 text-[15px] leading-7 text-secondary-slate">
                Hello, I’m Keith Lee — Frontend Developer（5+ years）.
            </p>

            <!-- 個人特質 / 工作經驗 摘要 -->
            <div class="mt-4 space-y-4 text-[15px] leading-7 text-zinc-700">
                <!-- 個人特質 -->
                <section>
                    <h2 class="text-sm font-semibold text-primary">個人特質</h2>
                    <p class="mt-1">
                        擅長自我學習、聽取他人建議，勇於挑戰新的技術；對事情抱持積極態度。
                        面對困難及錯誤，具備查詢並解決的能力。
                    </p>
                </section>

                <!-- 工作經驗（重點） -->
                <section>
                    <h2 class="text-sm font-semibold text-primary">工作經驗</h2>
                    <ul class="mt-1 space-y-1">
                        <li class="flex gap-2">
                            <span class="text-accent-gold">✓</span>
                            <span
                                >具模組化管理、前端框架應用、WebView
                                實作經驗</span
                            >
                        </li>
                        <li class="flex gap-2">
                            <span class="text-accent-gold">✓</span>
                            <span
                                >與後端工程師討論 API
                                規格，構想多種錯誤情況處理</span
                            >
                        </li>
                        <li class="flex gap-2">
                            <span class="text-accent-gold">✓</span>
                            <span>有獨立開發與團隊合作能力</span>
                        </li>
                    </ul>
                </section>
            </div>

            <!-- CTA -->
            <div class="mt-5 flex flex-wrap items-center gap-3">
                <a
                    href="mailto:aa242013759@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-secondary-indigo text-white hover:opacity-90"
                    >聯繫我</a
                >
                <a
                    href="https://github.com/SiaoXiao"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border hover:bg-zinc-50"
                    >查看作品集</a
                >
            </div>
        </div>

        <!-- 內容區：左目錄 / 右內容 -->
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- TOC -->
            <nav
                aria-label="目錄"
                class="hidden lg:block lg:col-span-3 sticky top-24 self-start"
            >
                <ul class="space-y-2 text-sm">
                    <li>
                        <a class="hover:underline" href="#autobiography"
                            >自傳</a
                        >
                    </li>
                    <li>
                        <a class="hover:underline" href="#strengths"
                            >技術強項</a
                        >
                    </li>

                    <li>
                        <a class="hover:underline" href="#values"
                            >價值觀與動機</a
                        >
                    </li>
                    <li>
                        <a class="hover:underline" href="#future">未來目標</a>
                    </li>
                    <li>
                        <a class="hover:underline" href="#life">工作之外</a>
                    </li>
                </ul>
            </nav>

            <!-- 內文 -->
            <article class="lg:col-span-9">
                <!-- 自傳 -->
                <section id="autobiography" class="scroll-mt-24">
                    <div class="flex items-center justify-between">
                        <h2 class="text-xl font-semibold text-primary">自傳</h2>
                        <button
                            type="button"
                            class="inline-flex items-center rounded-lg px-3 py-1.5 text-sm border hover:bg-zinc-50"
                            @click="bioExpanded = !bioExpanded"
                        >
                            {{ bioExpanded ? '顯示精簡版' : '展開完整自傳' }}
                        </button>
                    </div>

                    <!-- 精簡版 -->
                    <div class="mt-3 text-[15px] leading-7 text-zinc-700">
                        <p>
                            你好，我叫李凱鐘，英文名是
                            Keith，畢業於景文科技大學財金系。 我現在有超過 5
                            年的前端開發經驗。
                        </p>
                    </div>

                    <!-- 完整版 -->
                    <Transition name="fade">
                        <div
                            v-if="bioExpanded"
                            class="mt-3 space-y-3 text-[15px] leading-7 text-zinc-700"
                        >
                            <p>
                                在離開半導體設備廠之後，我選擇了換軌前端工程。這個轉變是基於我對新技術的熱衷和學習新知的態度。為此，我進入資策會學習半年的前端設計工程師養成課程，並利用平日的時間在網路學習平台上不斷提升自己。現在的我，全心全意地朝這個目標前進。
                            </p>
                            <p>
                                對於未來，我有幾個明確的期許和目標。首先，我希望可以持續充實前端相關的技術和資訊，加強我現有的程式語言技能和外語能力。其次，我計劃在未來五年內精進前端技術，然後再逐漸補強後端的能力。
                            </p>
                            <p>
                                自我期許的部分，我希望能夠持續學習，進而成為一個可以帶領團隊的領導者。我相信，透過每一次的工作經驗，我都能學習到新的事物，並不斷自我提升，讓自己成為更好的人，更好地配合公司的需求。
                            </p>
                            <p>
                                個人特質方面，我擅長自我學習，且願意聽取他人的建議。我有著對新技術的熱忱，並對待所有事情都保持積極的態度。當遇到困難或是錯誤時，我都有解決問題的能力。
                            </p>
                            <p>
                                在工作經驗上，我具有模組化管理、前端框架應用，以及Webview實作的經驗。我能與後端工程師討論API規格，並設想各種可能的錯誤情況以制定相對應的處理方式。我擁有獨立開發的能力，也能與團隊協作，共同完成專案。根據公司的專案需求，我能夠推薦適合的框架。
                            </p>
                            <p>
                                自從我踏入前端工程的道路，我一直認為學習是一生的旅程，而我願意投入時間與努力，不斷地學習新知，並且實踐於實際的工作之中。感謝每一個給我學習機會的工作經驗，我將持續精進自我，期待在未來的工作中，可以成為一個可以帶領團隊的領導者。
                            </p>
                            <p>
                                在這條道路上，我期待能與您一起合作，共同開創更好的未來。
                            </p>
                        </div>
                    </Transition>
                </section>

                <!-- 技術強項 -->
                <section id="strengths" class="mt-10 scroll-mt-24">
                    <h2 class="text-xl font-semibold text-primary">技術強項</h2>
                    <ul
                        class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] leading-7"
                    >
                        <li class="p-3 rounded-lg border">
                            <span class="font-medium text-primary"
                                >Vue 生態與型別化：</span
                            >
                            Vue 3、Vite、TypeScript、Pinia、Vue
                            Router、Tailwind、Element Plus、Primevue
                        </li>

                        <li class="p-3 rounded-lg border">
                            <span class="font-medium text-primary"
                                >元件化與設計系統：</span
                            >
                            元件邊界/命名、可重用模式、Storybook、樣式 Token 化
                        </li>
                        <li class="p-3 rounded-lg border">
                            <span class="font-medium text-primary"
                                >效能與穩定性：</span
                            >
                            路由/元件分包、<em>Props 穩定</em
                            >、<em>計算快取（computed）</em>、圖片/資產優化
                        </li>
                        <li class="p-3 rounded-lg border">
                            <span class="font-medium text-primary"
                                >API 與可觀測性：</span
                            >
                            型別化 API 契約、錯誤處理
                        </li>
                    </ul>
                </section>

                <!-- 代表作品 -->
                <section v-if="false" id="projects" class="mt-10 scroll-mt-24">
                    <h2 class="text-xl font-semibold text-primary">代表作品</h2>
                    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="rounded-xl border p-4">
                            <h3 class="font-medium">
                                Facility Submission（企業表單模組）
                            </h3>
                            <p class="mt-2 text-[15px] leading-7 text-zinc-700">
                                動態上傳、多檔驗證、跨頁抽屜，重構後提交錯誤率下降
                                35%、維護成本下降。
                            </p>
                            <a
                                href="/#projects"
                                class="mt-2 inline-block text-secondary-indigo hover:underline"
                                >查看詳情</a
                            >
                        </div>
                        <div class="rounded-xl border p-4">
                            <h3 class="font-medium">
                                Food Recommender（個人作品）
                            </h3>
                            <p class="mt-2 text-[15px] leading-7 text-zinc-700">
                                Nuxt/Vue +
                                Tailwind，資料標籤與偏好過濾，行動端轉換提高。
                            </p>
                            <a
                                href="/#projects"
                                class="mt-2 inline-block text-secondary-indigo hover:underline"
                                >查看詳情</a
                            >
                        </div>
                    </div>
                </section>

                <!-- 價值觀 -->
                <section id="values" class="mt-10 scroll-mt-24">
                    <h2 class="text-xl font-semibold text-primary">
                        價值觀與動機
                    </h2>
                    <ul
                        class="mt-3 list-disc pl-5 space-y-2 text-[15px] leading-7 text-zinc-700"
                    >
                        <li>
                            <span class="font-medium text-primary"
                                >使用者導向：</span
                            >尊重使用者時間，優先解決最痛的痛點。
                        </li>
                        <li>
                            <span class="font-medium text-primary"
                                >簡潔可讀：</span
                            >清楚命名、單一職責、文件化，讓下一個人好維護。
                        </li>
                        <li>
                            <span class="font-medium text-primary"
                                >誠實透明：</span
                            >及早溝通風險與依賴，讓決策建立在事實上。
                        </li>
                        <li>
                            <span class="font-medium text-primary"
                                >擁有者心態：</span
                            >對結果負責，從需求到上線與監控一條龍。
                        </li>
                        <li>
                            <span class="font-medium text-primary"
                                >持續成長：</span
                            >把經驗沉澱成設計系統／樣式
                            Token／最佳實務，回饋團隊。
                        </li>
                    </ul>
                </section>

                <!-- 未來 -->
                <section id="future" class="mt-10 scroll-mt-24">
                    <h2 class="text-xl font-semibold text-primary">未來目標</h2>
                    <p class="mt-3 text-[15px] leading-7 text-zinc-700">
                        近期持續加強前端基礎與實戰（Vue
                        生態、TypeScript、效能與可觀測性、測試覆蓋）。
                        <br />
                        中期聚焦前端架構與團隊工程化（設計系統與樣式
                        Token、狀態與資料流設計、分層架構、CI/CD 與規範落地）。
                        <br />
                        <strong
                            >長期目標是成為 Tech
                            Lead，帶領團隊一起前進與成長，建立一致的工程標準與交付節奏，讓產品迭代更穩、更快、更可預期。</strong
                        >
                    </p>
                </section>

                <!-- 生活之外 -->
                <section id="life" class="mt-10 scroll-mt-24">
                    <h2 class="text-xl font-semibold text-primary">工作之外</h2>
                    <p class="mt-3 text-[15px] leading-7 text-zinc-700">
                        空閒時喜歡打遊戲、聽音樂放鬆，也熱衷料理與懶人露營，享受和朋友一起出遊的時光。
                        我習慣用部落格與筆記整理學習過程；遇到相同問題的人，我會把實作與解法整理成步驟與範例分享，幫助他人快速上手。
                    </p>
                </section>

                <!-- CTA -->
                <div class="mt-10 flex flex-wrap items-center gap-3">
                    <a
                        href="mailto:aa242013759@hotmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-secondary-indigo text-white hover:opacity-90"
                        >聯繫我</a
                    >
                    <a
                        href="https://github.com/SiaoXiao"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border hover:bg-zinc-50"
                        >查看作品集</a
                    >
                </div>
            </article>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const bioExpanded = ref(false)
</script>
