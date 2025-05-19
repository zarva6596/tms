<template>
    <div class="flex flex-col gap-3">
        <the-accordion-item
            v-for="(item, key) in items"
            :key
            :active="activeIndex === key"
            :item
            @update="changeActive(key)"
        />
    </div>
</template>

<script setup lang="ts">
import type { FaqSectionSliceDefaultPrimaryListItem } from "~/prismicio-types.js"

const props = defineProps<{ items: FaqSectionSliceDefaultPrimaryListItem[], active?: number }>()

const activeIndex = ref<number | null>()

function changeActive(i: number | null) {
    activeIndex.value = activeIndex.value === i ? null : i
}

onMounted(() => props.active && changeActive(props.active))
</script>