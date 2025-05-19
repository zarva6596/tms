<template>
    <div class="flex gap-4 sm:gap-6 lg:gap-7">
        <div
            class="mt-0.5 shrink-0 rounded-lg bg-white text-sm/5 text-green-950 h-7 w-7 flex items-center justify-center
                sm:mt-2.5 lg:h-10 lg:w-10 lg:text-base/6"
        >
            {{ number }}
        </div>

        <div class="text-white max-w-105 lg:max-w-none">
            <div
                v-if="item.label"
                class="mb-3 sm:mb-2 lg:mb-4"
            >
                <prismic-rich-text :field="item.label" />
            </div>

            <div
                v-if="badges.length > 0"
                class="my-6 flex flex-col gap-2 lg:my-8"
            >
                <the-step-budge-item
                    v-for="({ icon, text }, key) in badges"
                    :key
                    :icon
                    :text
                />
            </div>

            <div
                v-if="item.description"
                class="mb-6 lg:mb-14 max-w-152 text-base/6 sm:text-lg/7 lg:text-xl/7 opacity-75"
            >
                <prismic-rich-text :field="item.description" />
            </div>

            <div
                v-if="item.image.url"
                class="w-full rounded-2xl overflow-hidden max-w-188"
            >
                <prismic-image
                    class="h-full w-full object-cover object-center"
                    :field="item.image"    
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {
    StepsSectionSliceDefaultPrimaryStepsItem,
    StepsSectionSliceDefaultPrimaryBadgesItem
} from "~/prismicio-types.js"

defineProps<{
    number: number,
    item: StepsSectionSliceDefaultPrimaryStepsItem,
    badges: StepsSectionSliceDefaultPrimaryBadgesItem[]
}>()
</script>