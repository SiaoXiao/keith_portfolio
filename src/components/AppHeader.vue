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

<style lang="scss" scoped>
header {
    li {
        position: relative;
        overflow: hidden;
        color: white;

        a {
            display: block;
            padding: 20px 10px;
            position: relative;
            bottom: 0;
            transition: all 0.5s;
            &::before {
                transition: all 0.5s;
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background: #fad701;
                z-index: 1;
            }

            @media (any-hover: hover) {
                &:hover::before {
                    width: 100%;
                }
                &:hover {
                    color: white;
                    opacity: 60%;
                    letter-spacing: 5px;
                }
            }
        }
        a.home {
            @media (any-hover: hover) {
                &:hover::before {
                    width: 0 !important;
                }
            }
        }

        span {
            transition: all 0.5s;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -40px;
            letter-spacing: 0;
            color: #fff;
            white-space: nowrap;
            opacity: 0;
        }
    }
}

.web {
    display: none;
}

.mobile {
    display: flex;
    ul {
        li {
            color: #fafafa;
            cursor: pointer;
            div {
                padding: 20px 10px;
                position: relative;
                bottom: 0;

                transition: all 0.5s;
                &::before {
                    transition: all 0.5s;
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #fad701;
                    z-index: 1;
                }
                @media (any-hover: hover) {
                    &:hover::before {
                        width: 100%;
                    }
                    &:hover {
                        color: #5f7470;
                        letter-spacing: 5px;
                    }
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .web {
        display: block;
    }
    .mobile {
        display: none;
    }
}

.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    animation: closeMask 0.3s linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    &::before {
        position: absolute;
        content: '';
        height: 1px;
        top: 80px;
        left: 0;
        right: 0;
        border-bottom: 1px solid #fff;
    }
}
.mask.active {
    animation: openMask 0.3s linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.menu_mobile {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 200vh;
    display: flex;
    padding-top: 100px;
    justify-content: center;
    .menu {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        animation: opacityOff 0.3s linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        li {
            &::before {
                transition: all 0.5s;
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background: #fad701;
                z-index: 1;
            }
            @media (any-hover: hover) {
                &:hover::before {
                    width: 100%;
                }

                &:hover {
                    color: #5f7470;
                    letter-spacing: 5px;
                    a {
                        bottom: -50%;
                    }
                    div {
                        bottom: -50%;
                    }
                    span {
                        top: 20px;
                        opacity: 1;
                    }
                }
            }
        }
    }
    .menu.active {
        animation: opacityOn 0.5s linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
}

@media only screen and (orientation: landscape) and (max-height: 600px) {
    .menu_mobile {
        height: 100%;
    }
    .web {
        display: block;
    }
    .mobile {
        display: none;
    }
}

@keyframes openMask {
    0% {
        height: 0vh;
    }

    100% {
        height: 100vh;
    }
}

@keyframes closeMask {
    0% {
        height: 100vh;
    }

    100% {
        height: 0vh;
    }
}

@keyframes opacityOn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes opacityOff {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

/** burger **/

button {
    cursor: pointer;
}

/* remove blue outline */
button:focus {
    outline: 0;
}

.burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 60;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
    background-color: #323232;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition:
        transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
}

.burger-bar--3 {
    transform: translateY(6px);
}

#burger.active .burger-button {
    transform: rotate(-180deg);
}

#burger.active .burger-bar--1 {
    transform: rotate(45deg);
    background-color: #fff;
}

#burger.active .burger-bar--2 {
    opacity: 0;
}

#burger.active .burger-bar--3 {
    transform: rotate(-45deg);
    background-color: #fff;
}
</style>
