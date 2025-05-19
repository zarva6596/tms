<template>
    <div>
        <the-history-list-item
            v-for="(item, key) in items"
            v-show="key < 4"
            :key
            :item
        />

        <div
            v-if="items.length > 4"
            class="grid transition-all duration-500 overflow-hidden"
            :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
            <div class="min-h-0">
                <the-history-list-item
                    v-for="(item, key) in items"
                    v-show="key > 3"
                    :key
                    :item
                />
            </div>
        </div>

        <button
            v-if="items.length > 4"
            class="mb-8 flex items-center justify-start transition-all duration-500 hover:opacity-70"
            @click="toggleSeeMore()"
        >
            <span class="text-base/6 w-20 text-start">
                See {{ isOpen ? 'less' : 'more' }}
            </span>

            <div
                class="transition-all duration-500 flex items-center"
                :class="isOpen && 'rotate-180 mt-0'"
            >
                <nuxt-icon name="material-symbols:keyboard-arrow-down-rounded" />
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import type { HistorySectionSliceDefaultPrimaryListItem } from "~/prismicio-types.js";

import TheHistoryListItem from "./TheHistoryListItem.vue";;

defineProps<{ items: HistorySectionSliceDefaultPrimaryListItem[] }>()

const [isOpen, toggleSeeMore] = useToggle()
</script>