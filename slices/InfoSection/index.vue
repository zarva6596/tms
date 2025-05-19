<template>
  <section
    class="py-20 sm:py-25 lg:py-40 px-5 sm:px-6 lg:px-36"
    :class="slice.variation === 'leftPhoto' && 'flex flex-col items-center xl:flex-row gap-10 lg:gap-21'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      v-if="slice.variation === 'leftPhoto' && slice.primary.image"
      class="shrink-0 w-full sm:w-[240px] lg:w-[480px] rounded-2.5xl overflow-hidden lg:max-w-[50%]"
    >
      <prismic-image :field="slice.primary.image" />
    </div>

    <div
      class="flex flex-col items-start text-left sm:items-center sm:text-center max-w-full"
      :class="slice.variation === 'leftPhoto' && 'xl:items-start xl:text-left'"
    >
      <div
        v-if="slice.primary.pre_heading"
        class="mb-2 lg:mb-0 text-gold-500 font-semibold"
      >
        <prismic-rich-text
          :field="slice.primary.pre_heading"
        />
      </div>

      <div
        class="mb-8"
        :class="slice.variation === 'default' && 'lg:mb-10'"
      >
        <prismic-rich-text
          v-if="slice.primary.heading"
          :field="slice.primary.heading"
        />
      </div>

      <the-marked-sentence
        v-if="slice.primary.description && typeof slice.primary.description === 'string'"
        class="mb-8 max-w-full"
        :class="slice.variation === 'default' ? 'mb-9 lg:mb-10 sm:justify-center' : 'sm:justify-center xl:justify-start'"
        :text="slice.primary.description"
      />

      <the-button
        v-if="slice.primary.button_text"
        :link="slice.primary.button_link.text"
      >
        {{ slice.primary.button_text }}
      </the-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.InfoTextSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
