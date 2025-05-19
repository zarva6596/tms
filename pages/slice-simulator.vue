<template>
  <slice-simulator v-slot="{ slices }">
    <slice-zone :components="components" :slices="slices" />
  </slice-simulator>
</template>

<script setup lang="ts">
import { SliceSimulator } from "@slicemachine/adapter-nuxt/simulator";

import { components } from "~/slices";
</script>
