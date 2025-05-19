<template>
    <div
        class="grid transition-all duration-500 overflow-hidden"
        :class="active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
        <div
            class="min-h-0 transition-all duration-500"
            :class="active ? 'opacity-100' : 'opacity-0'"
        >
            <div class="py-6 px-7 lg:py-6.5 lg:px-42">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ active: boolean, text: KeyTextField }>()
</script>