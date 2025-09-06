<template>
    <div class="flex items-end justify-between">
        <h2 class="text-2xl font-bold text-primary">工作經驗</h2>
        <RouterLink
            to="/works"
            class="text-secondary-indigo hover:underline text-sm"
        >
            完整工作經驗 →
        </RouterLink>
    </div>

    <el-timeline style="max-width: 600px; margin-top: 20px">
        <el-timeline-item
            v-for="(item, idx) in visible"
            :key="item.id ?? idx"
            :timestamp="formatRange(item.start, item.end)"
            size="large"
            :color="idx === 0 ? 'var(--color-accent-gold)' : undefined"
        >
            <h3 class="text-base font-semibold text-primary">
                {{ item.companyName }}
            </h3>
            <span class="font-medium">{{ item.role }}</span>
        </el-timeline-item>

        <!-- 更多經歷 -->
        <el-timeline-item
            hide-timestamp
            size="large"
            type="primary"
            :icon="MoreFilled"
        >
            <RouterLink
                to="/works"
                class="inline-flex items-center gap-2 text-secondary-indigo hover:underline"
            >
                <span>更多經歷，查看完整時間軸</span>
            </RouterLink>
        </el-timeline-item>
    </el-timeline>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import type { IExperience } from '@/types/experience'

const props = withDefaults(
    defineProps<{
        items: IExperience[]
        limit?: number
    }>(),
    {
        limit: 3,
    }
)

// YYYY/MM -> 202507（數字），用來排序
const ymToNumStrict = (s: string): number => {
    const [y, m] = s.split('/')
    return Number(y) * 100 + Number(m)
}

// 在職（end 為空字串或未提供）排最前；其餘用 end（沒有就用 start）
const sortValue = (e: IExperience): number => {
    if (!e.end) return Number.POSITIVE_INFINITY // 在職最大
    return ymToNumStrict(e.end || e.start)
}

/** 新→舊 排序 */
const sorted = computed(
    () => [...props.items].sort((a, b) => sortValue(b) - sortValue(a))
)

// /** 只取前 N 筆 */
const visible = computed(() => sorted.value.slice(0, props.limit))

const formatRange = (start: string, end?: string | null) => {
  return end && end.length ? `${start} - ${end}` : `${start} - 迄今`
}
</script>
