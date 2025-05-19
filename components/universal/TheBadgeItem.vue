<template>
    <div class="flex bg-white/10 rounded-lg overflow-hidden">
        <div class="bg-white/10 w-7 lg:w-9 aspect-square flex items-center justify-center shrink-0">
            <svg
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_5010_115)">
                    <path
                        d="M4.16675 9.99967L8.33341 14.1663L16.6667 5.83301"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                    />
                </g>

                <defs>
                    <clipPath id="clip0_5010_115">
                        <rect
                            fill="white"
                            height="20"
                            width="20"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>

        <div class="py-1 px-2.5 lg:py-1.5 sm:px-3 text-md/5 text-sm/5 lg:text-base/6 text-white">
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ text: string | KeyTextField }>()
</script>