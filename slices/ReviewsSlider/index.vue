<template>
  <section
    class="text-zinc-800 py-20 sm:pt-32 sm:pb-25 lg:pt-40 lg:pb-28"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="text-center max-w-152 mx-auto mb-12 sm:mb-10 lg:mb-12">
      <prismic-rich-text :field="slice.primary.heading" />
    </div>

    <div class="relative w-screen left-1/2 -translate-x-1/2">
      <swiper-container
        ref="containerRef"
        :init="false"
      >
        <swiper-slide 
          v-for="(item, key) in slice.primary.items"
          :key
          class="w-70 sm:w-94 lg:w-188 mb-10"
        >
          <the-review-slide :item />
        </swiper-slide>
      </swiper-container>

      <div class="z-50 absolute top-0 left-0 h-full w-20 lg:w-52 bg-gradient-to-r from-white to-white/0" />
      <div class="z-50 absolute top-0 right-0 h-full w-20 lg:w-52 bg-gradient-to-l from-white to-white/0" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.ReviewsSliderSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {},
    autoplay: {
        delay: 2_500
    },
    loop: true,
})

onMounted(() => swiper.instance)
</script>
