<template>
    <header
        class="fixed z-10 max-w-[1920px] w-full bg-secondary-slate card-shadow"
    >
        <nav class="w-full h-full px-5 py-2 web">
            <div class="flex item-canter justify-center">
                <div class="w-full flex item-center">
                    <RouterLink to="/" class="flex items-center gap-3 home">
                        <span
                            class="text-lg font-semibold tracking-wide text-white"
                        >
                            Keith Lee
                        </span>
                        <div
                            class="size-13 rounded-full overflow-hidden ring-2 ring-white/80"
                        >
                            <img
                                src="@/assets/image/IMG_2554.jpeg"
                                alt="Avatar"
                                class="w-full h-full object-cover block"
                            />
                        </div>
                    </RouterLink>
                </div>
                <ul
                    v-if="menuArray.length !== 0"
                    class="w-full h-full px-5 flex items-center justify-around"
                >
                    <li
                        v-for="item in menuArray"
                        :key="item.to"
                        class="w-full h-full flex items-center justify-center text-base font-bold tracking-wider"
                    >
                        <RouterLink
                            :to="item.to"
                            class="text-block px-2 py-1"
                            >{{ item.tag }}</RouterLink
                        >
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="w-full h-full justify-end px-5 py-2 items-center mobile">
            <div
                v-show="isOpen"
                class="mask"
                :class="{ active: isClose }"
            ></div>
            <div v-show="isOpen" class="menu_mobile">
                <ul
                    class="menu"
                    v-if="menuArray.length !== 0"
                    :class="{ active: isClose }"
                >
                    <li
                        class="text-3xl font-bold text-[#FAFAFA] tracking-wider"
                        @click="changePage('/')"
                    >
                        <span
                            class="text-3xl font-bold text-[#FAFAFA] tracking-wider"
                            >首頁</span
                        >
                        <div class="text-block px-2 py-1">Home</div>
                    </li>
                    <li
                        v-for="item in newMenuArray"
                        :key="item.to"
                        class="text-3xl font-bold text-[#FAFAFA] tracking-wider"
                        @click="changePage(item.to)"
                    >
                        <span
                            class="text-3xl font-bold text-[#FAFAFA] tracking-wider"
                            >{{ item.tag }}</span
                        >
                        <div class="text-block px-2 py-1">
                            {{ item.span }}
                        </div>
                    </li>
                </ul>
            </div>
            <div
                id="burger"
                :class="{ active: isOpen }"
                @click.prevent="toggle"
            >
                <slot>
                    <button type="button" class="burger-button" title="Menu">
                        <span class="burger-bar burger-bar--1"></span>
                        <span class="burger-bar burger-bar--2"></span>
                        <span class="burger-bar burger-bar--3"></span>
                    </button>
                </slot>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
    menuArray: {
        type: Array,
        default: [],
    },
})
const isOpen = ref(false)
const isClose = ref(false)
const router = useRouter()

const newMenuArray = computed(() => {
    return props.menuArray.filter((item) => item.to !== '/')
})
const toggle = () => {
    if (!isOpen) {
        isOpen.value = !isOpen.value
    } else {
        isClose.value = !isClose.value
        setTimeout(() => {
            isOpen.value = !isOpen.value
        }, 300)
    }
}
const isCheck = () => {
    if (window.innerWidth >= 1024) {
        isOpen.value = false
        isClose.value = false
    }
}

const changePage = (val) => {
    isOpen.value = false
    isClose.value = false
    router.push({ path: val })
}

onMounted(() => {
    window.addEventListener('resize', isCheck)
})

onUnmounted(() => {
    window.removeEventListener('resize', isCheck)
})
</script>
