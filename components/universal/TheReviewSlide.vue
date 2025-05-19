<template>
    <div
class="border border-stone-200 bg-stone-50 p-7 pb-8 sm:pb-9 lg:p-12 lg:pb-12 lg:pr-14 flex flex-col
        lg:flex-row lg:items-center gap-7 sm:gap-8 rounded-2xl relative w-70 sm:w-94 lg:w-188"
    >
        <div class="absolute right-0 top-0 h-full w-fit">
            <img
                alt="Background texture"
                class="h-full"
                src="~/assets/images/slide-bg.webp"
            />
        </div>

        <div class="h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56 rounded-2xl overflow-hidden shrink-0">
            <prismic-image
                class="h-full w-full object-cover object-center"
                :field="item.photo"
            />
        </div>

        <div class="flex flex-col gap-3 lg:gap-6 text-base/6 sm:text-lg/7 lg:text-xl/7">
            <span>
                "{{ item.text }}"
            </span>

            <span class="font-semibold">
                {{ item.full_name }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ReviewsSliderSliceDefaultPrimaryItemsItem } from "~/prismicio-types.js"

defineProps<{ item: ReviewsSliderSliceDefaultPrimaryItemsItem }>()
</script>