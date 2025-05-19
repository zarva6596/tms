<template>
    <div class="flex text-lg/7 py-5 border-b border-white/10 last-of-type:border-0">
        <div class="w-48 shrink-0 text-white/50 font-medium pr-10">
            {{ item.title }}
        </div>

        <div class="flex">
            <the-comparison-table-row-value :value="item.tms" />
            <the-comparison-table-row-value :value="item.spravato" />
            <the-comparison-table-row-value :value="item.iv_im" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ComparisonSectionSliceDefaultPrimaryItemsItem } from "~/prismicio-types.js"

import TheComparisonTableRowValue from "./TheComparisonTableRowValue.vue";

defineProps<{ item: ComparisonSectionSliceDefaultPrimaryItemsItem }>()
</script>