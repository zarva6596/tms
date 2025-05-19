<template>
  <section
    class="px-1 grid gap-2 sm:grid-cols-2 lg:grid-cols-6 lg:max-w-[1108px] lg:mx-auto"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <the-short-info-card
      v-for="(item, key) in slice.primary.card"
      :key
      class="lg:col-span-2"
      :class="{
        'sm:row-span-2': key === 3,
        'lg:col-span-3 lg:row-span-1': key === 3 || key === 4
      }"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CardsSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
