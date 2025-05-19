<template>
    <div class="max-w-6xl mx-auto relative">
        <div
            class="tms-border absolute border border-white rounded-2xl h-full top-0 left-48"
        />
        
        <div class="bg-white/10 rounded-2xl flex">
            <div class="w-48 shrink-0" />

            <div class="flex w-full">
                <the-comparison-table-head-item
                    :value="tms_label"
                />

                <the-comparison-table-head-item
                    class="opacity-50"
                    :value="spravato_label"
                />

                <the-comparison-table-head-item
                    class="opacity-50"
                    :value="iv_im_label"
                />
            </div>
        </div>

        <the-comparison-table-row
            v-for="(item, key) in items"
            :key
            :item
        />
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

import type { ComparisonSectionSliceDefaultPrimaryItemsItem } from "~/prismicio-types.js"

import TheComparisonTableHeadItem from "./TheComparisonTableHeadItem.vue";
import TheComparisonTableRow from "./TheComparisonTableRow.vue";

defineProps<{
    items: ComparisonSectionSliceDefaultPrimaryItemsItem[],
    tms_label: KeyTextField,
    spravato_label: KeyTextField,
    iv_im_label: KeyTextField
}>()
</script>

<style>
.tms-border {
    width: calc((100% - 172px) / 3);
}
</style>