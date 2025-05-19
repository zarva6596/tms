<template>
    <div
        class="mb-8 sm:mb-3 sm:flex sm:gap-4 lg:gap-3 lg:mb-2 lg:last-of-type:mb-3"
    >
        <div
            class="border border-green-350 w-fit rounded-lg py-0.5 px-2 text-sm/5 flex items-center justify-center text-green-350
                mb-3 sm:mb-0 h-fit lg:text-base/6 lg:px-2.5"
        >
            {{ item.year }}
        </div>

        <div class="text-sm/5 sm:pt-0.5 lg:text-base/6 lg:pt-0.5">
            <span>{{ asText(item.text) }}</span>

            <span class="hidden lg:inline text-base/6 text-green-350 mx-3">•</span>

            <nuxt-link
                class="ml-1.5 text-green-350 underline lg:ml-0 cursor-pointer transition-all duration-500 hover:opacity-50"
                :to="item.link_address.text"
            >
                {{ item.link_title }}
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { asText } from "@prismicio/client";

import type { HistorySectionSliceDefaultPrimaryListItem } from "~/prismicio-types.js";

defineProps<{ item: HistorySectionSliceDefaultPrimaryListItem }>()
</script>