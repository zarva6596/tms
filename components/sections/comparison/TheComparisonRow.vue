<template>
    <div
        class="flex flex-col gap-1 sm:flex-row sm:gap-5 pt-7 px-6 pb-3.5 sm:pt-4 sm:pb-5 sm:px-5
            sm:border-b sm:border-white/10 last-of-type:border-0"
    >
        <span class="text-sm/5 sm:text-base/6 font-medium sm:basis-1/3 opacity-50">{{ label }}</span>
        
        <span class="text-base/6 sm:basis-2/3">{{  description }}</span>
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ label: KeyTextField, description: KeyTextField }>()
</script>