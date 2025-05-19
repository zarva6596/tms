<template>
    <div class="bg-green-950 border border-white/20 rounded-2xl overflow-hidden">
        <div class="bg-white/10 py-4.5 px-6">
            <span class="text-2.5xl/8 font-abc">
                {{  item.title }}
            </span>
        </div>

        <the-comparison-row
            :description="item.tms"
            :label="tms_label"
        />

        <the-comparison-row
            :description="item.spravato"
            :label="spravato_label"
        />

        <the-comparison-row
            :description="item.iv_im"
            :label="iv_im_label"
        />
    </div>
</template>

<script setup lang="ts">
import type { KeyTextField } from "@prismicio/client"

import type { ComparisonSectionSliceDefaultPrimaryItemsItem } from "~/prismicio-types.js"

import TheComparisonRow from "./TheComparisonRow.vue";

defineProps<{
    item: ComparisonSectionSliceDefaultPrimaryItemsItem,
    tms_label: KeyTextField,
    spravato_label: KeyTextField,
    iv_im_label: KeyTextField
}>()
</script>