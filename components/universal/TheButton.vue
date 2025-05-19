<template>
    <component
        :is="link ? NuxtLink : 'button'"
        class="block w-fit px-8 py-4 text-base/6 rounded-xl font-semibold transition-all duration-300 hover:opacity-8 text-center"
        :class="invert ? 'bg-white text-green-950' : 'text-white bg-green-950'"
        :target="target"
        :to="link"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

withDefaults(defineProps<{
    link?: string,
    target?: HTMLAnchorElement["target"],
    invert?: boolean
}>(), {
    link: "",
    target: "_self"
})
</script>