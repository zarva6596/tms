<template>
  <slice-zone
    :components="components"
    :slices="page?.data.slices ?? []"
    wrapper="main"
  />
</template>

<script setup lang="ts">
import { components } from "~/slices"

const prismic = usePrismic()
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home"))

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image),
})
</script>
