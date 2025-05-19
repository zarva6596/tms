<template>
    <header class="px-4 lg:px-6 py-5">
        <prismic-image
            v-if="settings"
            class="h-8"
            :field="settings.data.logo"
        />
    </header>
</template>

<script setup lang="ts">
const settings = useSettings()
</script>