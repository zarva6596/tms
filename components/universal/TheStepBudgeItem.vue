<template>
    <div class="p-4 sm:py-3 lg:p-2 bg-grey-500/10 border bg-gray-100/10 border-white/15 rounded-xl flex items-center gap-4 lg:gap-3 lg:w-fit">
        <div class="flex items-center justify-center rounded-lg bg-white/10 h-7 w-7 shrink-0">
            <nuxt-icon :name="icon as string" />
        </div>

        <span
            class="text-sm/5 lg:text-base/6"
        >
            {{ text }}
        </span>
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ icon: KeyTextField, text: KeyTextField }>()
</script>