<template>
  <section
    class="relative w-screen left-1/2 -translate-x-1/2 lg:w-full bg-green-950 py-8 px-7 sm:py-20 text-white lg:py-30 lg:rounded-2.5xl"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="max-w-58 sm:max-w-none">
      <div class="mb-4 sm:mb-2 sm:text-center">
        <prismic-rich-text :field="slice.primary.pre_heading" />
      </div>

      <div class="mb-12 sm:mb-14 sm:text-center lg:mb-18">
        <prismic-rich-text :field="slice.primary.heading" />
      </div>
    </div>

    <div class="flex flex-col gap-6 sm:gap-3 lg:hidden">
      <the-comparison-card
        v-for="(item, key) in slice.primary.items"
        :key
        :item
        :iv_im_label="slice.primary.iv_im_title"
        :spravato_label="slice.primary.spravato_title"
        :tms_label="slice.primary.tms_title"
      />
    </div>

    <the-desktop-comparison-table
      class="hidden lg:block"
      :items="slice.primary.items"
      :iv_im_label="slice.primary.iv_im_title"
      :spravato_label="slice.primary.spravato_title"
      :tms_label="slice.primary.tms_title"
    />
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

import TheComparisonCard from "~/components/sections/comparison/TheComparisonCard.vue";
import TheDesktopComparisonTable from "~/components/sections/comparison/TheDesktopComparisonTable.vue"

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ComparisonSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
