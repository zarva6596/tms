<template>
  <section
    class="pt-20 pb-60 sm:pt-30 sm:pb-96 lg:pt-40 lg:pb-32"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="mb-10 sm:mb-12 lg:mb-16 max-w-[500px] lg:max-w-[700px] mx-auto sm:text-center">
      <prismic-rich-text :field="slice.primary.heading" />
    </div>

    <the-accordion
      class="mx-auto max-w-[1120px]"
      :items="slice.primary.list"
    />
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FaqSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
