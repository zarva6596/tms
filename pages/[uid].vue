<template>
  <slice-zone :components="components" :slices="page?.data.slices ?? []" wrapper="main" />
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(
  `[landing_page-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("landing_page", route.params.uid as string),
);

useSeoMeta({
  title: page.value?.data.meta_title,
  ogTitle: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogDescription: page.value?.data.meta_description,
  ogImage: computed(() => prismic.asImageSrc(page.value?.data.meta_image)),
});
</script>
