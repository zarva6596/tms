<template>
    <div class="py-16 px-10 sm:px-25 rounded-2.5xl overflow-hidden flex flex-col items-center relative">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full">
            <client-only>
                <img
                    alt="Background texture"
                    class="h-full w-full object-containe"
                    src="~/assets/images/bg.webp"
                />
            </client-only>
        </div>

        <div
            v-if="title"
            class="mb-6 sm:mb-3 lg:mb-4 text-center px-3 relative"
        >
            <prismic-rich-text
                :field="title"
            />
        </div>

        <div
            v-if="description"
            class="mb-8 sm:mb-6 lg:mb-7 text-center text-base/6 sm:text-lg/7 lg:text-xl/7 lg:max-w-xl relative"
        >
            <prismic-rich-text :field="description" />
        </div>

        <the-button
            v-if="buttonText"
            class="relative"
            :link="buttonLink"
            @click="emit('onButtonClick')"
        >
            {{ buttonText }}
        </the-button>
    </div>
</template>

<script setup lang="ts">
import type { RichTextField, KeyTextField } from "@prismicio/client"

defineProps<{
    title: RichTextField,
    description?: RichTextField,
    buttonText?: KeyTextField,
    buttonLink?: string
}>()

const emit = defineEmits<{
    onButtonClick: []
}>()
</script>