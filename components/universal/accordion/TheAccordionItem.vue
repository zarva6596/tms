<template>
    <div class="text-green-800">
        <the-accordion-item-header
            :active
            :label="item.label"
            @click="emit('update')"
        />

        <the-accordion-item-content
            :active
            :text="item.text"
        />
    </div>
</template>

<script setup lang="ts">
import type { FaqSectionSliceDefaultPrimaryListItem } from "~/prismicio-types.js"

defineProps<{ item: FaqSectionSliceDefaultPrimaryListItem, active: boolean }>()
const emit = defineEmits<{
    update: []
}>()
</script>