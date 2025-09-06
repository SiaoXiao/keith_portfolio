<template>
  <footer class="max-w-[1920px] h-[190px] w-full bg-secondary-slate p-6">
    <div class="w-full flex flex-col text-center text-white">
      <h4 class="text-center">Contact info</h4>
      <hr class="mt-2 text-gray-400 w-1/3 mx-auto" />
      <div
        class="w-full mt-5 flex justify-center items-center gap-3"
        aria-label="社群連結"
      >
        <!-- GitHub -->
        <a
          href="https://github.com/SiaoXiao"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 block group p-2 rounded-full bg-transparent border border-white hover:bg-white/80 hover:border-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5 fill-current text-white group-hover:text-secondary-slate/80"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.55-.36.86 0 1.74.12 2.55.36 1.95-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.08.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .26.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
            />
          </svg>
        </a>
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/keith-lee-79835721b/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 block group p-2 rounded-full bg-transparent border border-white hover:bg-white/80 hover:border-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5 fill-current text-white group-hover:text-secondary-slate/80"
            aria-hidden="true"
          >
            <path
              d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8 8.98h4.8v2.05h.07c.67-1.27 2.31-2.6 4.76-2.6 5.1 0 6.04 3.36 6.04 7.73V24h-5v-6.53c0-1.56-.03-3.56-2.17-3.56-2.18 0-2.51 1.7-2.51 3.45V24H8z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="mt-2">
      <p class="font-sans text-white text-sm text-center leading-10">
        {{ text }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const date = new Date();
const year = date.getFullYear();
const text = ref(
  `Copyright © Keith Lee ${year ? year : "2025"}. All Rights Reserved.`,
);
</script>
