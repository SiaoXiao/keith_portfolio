<template>
    <main
        class="mx-auto min-h-[calc(100vh-190px)] max-w-6xl px-4 sm:px-6 lg:px-8 lg:pt-28 pt-16 pb-12"
    >
        <!-- 完整工作經驗 -->
        <section id="background">
            <h2 class="text-2xl font-bold text-primary">完整工作經驗</h2>
            <ExperienceList :items="items" />
        </section>

        <!-- CTA -->
        <div class="mt-12 flex flex-wrap items-center gap-3">
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
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExperienceList from '@/components/ExperienceList.vue'
import type { IExperience } from '@/types/experience'
import experiences from '@/data/experience.json'

const items = ref<IExperience[]>(experiences)
</script>
