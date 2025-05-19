<template>
  <section
    class="rounded-2xl lg:rounded-2.5xl flex flex-col lg:flex-row-reverse overflow-hidden lg:max-h-160"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="overflow-hidden h-60 sm:h-52 lg:h-auto lg:basis-1/2">
      <prismic-image
        class="h-full w-full object-cover object-top"
        :field="slice.primary.main_image"
      />
    </div>

    <div class="overflow-hidden relative px-9 py-12 sm:px-12 lg:px-16 lg:py-32 lg:basis-1/2">
      <prismic-image
        class="absolute left-0 top-0 h-full w-full object-cover"
        :field="slice.primary.text_background"
      />

      <div class="relative text-white">
        <prismic-rich-text
          :field="slice.primary.heading"
          wrapper="h1"
        />

        <div class="text-base/6 lg:text-lg/7 mt-3 lg:mt-5">
          <prismic-rich-text
            :field="slice.primary.description"
          />
        </div>

        <div class="flex flex-wrap gap-2 mt-5 lg:mt-8">
          <the-badge-item
            v-for="({ item }, key) in slice.primary.options"
            :key
            :text="item"
          />
        </div>

        <the-button
          class="w-full sm:w-fit mt-8 sm:mt-7 lg:mt-14"
          invert
          :link="slice.primary.button_link.text"
        >
          {{ slice.primary.button_text }}
        </the-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.MainSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
