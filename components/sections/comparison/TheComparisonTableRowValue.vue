<template>
    <div class="basis-1/3 pl-6 pr-4 last-of-type:pr-0">
        {{ value }}
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ value: KeyTextField }>()
</script>