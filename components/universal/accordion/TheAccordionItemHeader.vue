<template>
    <div
        class="py-6 px-7 lg:py-6.5 lg:px-42 flex items-center gap-4 sm:gap-3 bg-stone-50 border border-stone-200 rounded-2xl
            cursor-pointer"
    >
        <div
            class="shrink-0 h-6 w-6 flex items-center justify-center transition-all duration-500 rounded-full bg-green-950"
            :class="{ 'rotate-180': active }"
        >
            <nuxt-icon
                class="text-white mt-0.5"
                name="material-symbols:keyboard-arrow-down-rounded"
            />
        </div>

        <span class="text-base/6 lg:text-lg/7">
            {{ label }}
        </span>
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ label: KeyTextField, active: boolean }>()
</script>