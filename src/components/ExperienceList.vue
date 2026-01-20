<template>
  <section>
    <!-- 排序控制（可關閉） -->
    <div v-if="showSortControl" class="flex items-center justify-end gap-2 mb-2">
      <label class="text-xs text-secondary-slate">排序：</label>
      <select
        v-model="order"
        class="border border-zinc-300/80 rounded-md px-2 py-1 text-sm bg-white"
      >
        <option value="desc">新 → 舊</option>
        <option value="asc">舊 → 新</option>
      </select>
    </div>

    <ul class="mt-4 space-y-6">
      <li
        v-for="item in sorted"
        :key="item.id"
        class="rounded-2xl border border-zinc-200/80 shadow-md bg-white p-5"
      >
        <h3 class="text-xl font-semibold text-primary">
          {{ item.companyName }}
        </h3>

        <span class="text-base font-normal text-secondary-slate">{{ item.role }}</span>

        <p class="mt-1 text-sm text-secondary-slate">
           <time>{{ formatYM(item.start) }}</time>
          <span> – </span>
  <template v-if="item.end">
    <time>{{ formatYM(item.end!) }}</time>
  </template>
  <span v-else>迄今</span>
        </p>

        <!-- 我做了什麼（條列） -->
        <ul
          v-if="item.highlights?.length"
          class="mt-4 list-disc pl-5 marker:text-accent-gold space-y-2 text-[15px] leading-7 text-zinc-700"
        >
          <li v-for="(h, i) in item.highlights" :key="i">{{ h }}</li>
        </ul>

        <!-- 使用技術 -->
        <p v-if="item.tech?.length" class="mt-5 text-[15px] leading-7 text-zinc-700">
          <span class="text-primary font-medium">使用技術及工具包括：</span>
          <template v-for="(t, i) in item.tech" :key="i">
            <template v-if="isObj(t) && t.url">
              <a
                :href="t.url"
                target="_blank"
                rel="noopener"
                class="underline decoration-dotted underline-offset-2 hover:text-secondary-indigo"
              >
                {{ t.name }}
              </a>
            </template>
            <template v-else>
              <span>{{ isObj(t) ? t.name : t }}</span>
            </template>
            <span v-if="i < item.tech!.length - 1">、</span>
          </template>
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { IExperience, Tech } from '@/types/experience'
import { formatYearMonth, parseYearMonthNumber } from '@/utils/date'

type SortOrder = 'asc' | 'desc'

const props = withDefaults(defineProps<{
  items: IExperience[]
  defaultOrder?: SortOrder
  showSortControl?: boolean
}>(), {
  defaultOrder: 'desc',
  showSortControl: true
})

const order = ref<SortOrder>(props.defaultOrder)
watch(() => props.defaultOrder, v => { if (v) order.value = v })

/** 排序用 key：優先 end，沒有 end（在職）則用 start */
const sortKey = (e: IExperience): number => {
  return parseYearMonthNumber(e.end) ?? parseYearMonthNumber(e.start) ?? 0
}

const sorted = computed(() => {
  const arr = [...props.items]
  arr.sort((a, b) => {
    const ka = sortKey(a)
    const kb = sortKey(b)
    const aCurrent = !a.end
    const bCurrent = !b.end

    // 在職的位置要跟排序方向一致
    if (aCurrent !== bCurrent) {
      if (order.value === 'desc') {
        // 新→舊：在職排最前
        return aCurrent ? -1 : 1
      } else {
        // 舊→新：在職排最後
        return aCurrent ? 1 : -1
      }
    }

    // 其餘按年月比較
    return order.value === 'desc' ? (kb - ka) : (ka - kb)
  })
  return arr
})

const isObj = (t: Tech): t is { name: string; url?: string } =>
  typeof t === 'object' && t !== null && 'name' in t

const formatYM = (raw: string): string => formatYearMonth(raw)
</script>
