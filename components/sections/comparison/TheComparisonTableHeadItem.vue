<template>
    <div class="text-base/6 p-4 pl-6 basis-1/3">
        {{ value }}
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

defineProps<{ value: KeyTextField }>()
</script>