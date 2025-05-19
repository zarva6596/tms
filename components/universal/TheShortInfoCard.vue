<template>
    <div
      class="border border-stone-200 bg-stone-50 rounded-xl relative pt-12 px-5 pb-5
        sm:px-6 sm:pt-14 sm:flex sm:flex-col sm:justify-end
        lg:pt-44 lg:px-7 lg:pb-8"
    >
      <div
        class="absolute -left-[1px] -top-[1px] h-9 w-9 bg-gold-500 rounded-br-xl rounded-tl-xl flex items-center justify-center
            lg:left-7 lg:top-7 lg:rounded-xl"
    
    >
        <img 
          :alt="`${item.icon} icon`"
          :src="`./icons/${item.icon}.svg`"
        />
      </div>

      <div class="flex flex-col gap-1 sm:gap-2 lg:gap-4">
        <div class="max-w-sm">
            <prismic-rich-text :field="item.title" />
        </div>

        <div class="text-sm/5">
            <span
                v-for="({ text, marked }, key) in description"
                :key
                class="mr-1.5 tracking-2"
                :class="marked && 'font-semibold'"
            >
                {{ text }}
            </span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { asText } from "@prismicio/client"

import type { CardsSectionSliceDefaultPrimaryCardItem } from "~/prismicio-types.js"

const props = defineProps<{ item: CardsSectionSliceDefaultPrimaryCardItem }>()

function splitTextWithQuotes(text: string): { text: string; marked: boolean }[] {
    const regex = /("[^"]*"|'[^']*')|([^"']+)/g;
    const parts: { text: string; marked: boolean }[] = [];

    text.replaceAll(regex, (match: string) => {
        const isMarked = /^["'].*["']$/.test(match);
        parts.push({
            text: isMarked ? match.slice(1, -1) : match.trim(),
            marked: isMarked
        });

        return match;
    });

    return parts;
}

const description = computed(() => splitTextWithQuotes(asText(props.item.description)))
</script>