<template>
  <section
    class="px-5 py-20 relative sm:py-18 sm:px-3 lg:px-30 lg:my-6 lg:rounded-2.5xl lg:overflow-hidden text-green-950"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="absolute left-1/2 top-0 -translate-x-1/2 h-full w-screen">
      <img
        alt="Blue Background texture"
        class="w-full h-full object-center object-cover"
        src="~/assets/images/bg-blue.webp"
      />
    </div>

    <div class="relative mb-10 lg:mb-8">
      <prismic-rich-text :field="slice.primary.heading" />
    </div>

    <div class="relative">
      <the-history-list :items="slice.primary.list" />

      <the-button
        class="w-full sm:w-fit"
        :link="slice.primary.button_link.text"
      >
        {{ slice.primary.button_text }}
      </the-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

import TheHistoryList from "~/components/sections/history/TheHistoryList.vue";

defineProps(
  getSliceComponentProps<Content.HistorySectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
