<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
<script setup>

useHead({
  bodyAttrs: {
    class: "h-full bg-white",
  },
  htmlAttrs: {
    class: "h-full",
  },
});
</script>
