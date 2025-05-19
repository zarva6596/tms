<template>
  <section
    class="relative pt-10 pb-7 sm:pb-6 px-5 sm:px-0 sm:pt-14 lg:pt-30"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="absolute left-1/2 top-0 -translate-x-1/2 h-full w-screen bg-gradient-to-b from-green-950 to-indigo-500" />

    <div class="relative flex flex-col gap-18 sm:gap-22 lg:gap-36">
      <div class="lg:flex lg:gap-28">
        <div class="text-white mb-18 sm:mb-22 sm:text-center lg:max-w-[288px]">
          <prismic-rich-text :field="slice.primary.title" />
        </div>

        <div class="flex flex-col gap-18 sm:gap-22 lg:gap-36 items-center lg:items-start">
          <the-step-item
            v-for="(item, key) in slice.primary.steps"
            :key
            :badges="slice.primary.badges.filter(item => item.step_index === key)"
            :item
            :number="key + 1"
          />
        </div>
      </div>

      <the-full-widht-info-text-card
        :button-text="slice.primary.action_button_text"
        :description="slice.primary.action_desctiption"
        :title="slice.primary.action_title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

import TheStepItem from "~/components/sections/steps/TheStepItem.vue";

defineProps(
  getSliceComponentProps<Content.StepsSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
