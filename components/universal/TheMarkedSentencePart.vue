<template>
    <span
        class="border border-gold-400/30 bg-gold-400/8 px-2 py-0.5 rounded-lg
            whitespace-nowrap text-base/6 font-medium sm:text-lg/7 lg:text-xl text-gold-500"
        :class="{
            '!border-l !rounded-l-lg pr-0': first,
            '!border-r !pr-2 !rounded-r-lg': last,
        }"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
defineProps<{ first?: boolean, last?: boolean }>()
</script>