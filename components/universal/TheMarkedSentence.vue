<template>
    <div
        v-if="result?.length"
        class="text-zinc-800 text-base/6 sm:text-lg/7 lg:text-xl/7 flex items-center flex-wrap gap-2"
    >
        <template
            v-for="(item, i) in result"
            :key="i"
        >
            <component
                :is="item.marked ? TheMarkedSentencePart : 'span'"
                v-if="item.text"
                ref="wordRefs"
                :class="{
                    '-mr-2 border-r-0 rounded-r-none': item.marked && !item.last,
                    'border-l-0 rounded-l-none pr-0': item.marked && !item.first,
                    '!pr-2': item.marked && item.last
                }"
                :first="!checkUnique(i, 'first')"
                :last="!checkUnique(i, 'last')"
            >
                {{ item.text }}
            </component>
        </template>
    </div>
</template>

<script setup lang="ts">
import TheMarkedSentencePart from "./TheMarkedSentencePart.vue";

const props = defineProps<{ text: string }>()

const result = computed(() => {
    const regex = /("[^"]*"|'[^']*')|([^"']+)/g;
    const parts: {
        text: string,
        marked: boolean,
        last?: boolean,
        first?: boolean
    }[] = []

    props.text.replaceAll(regex, (match: string) => {
        const isMarked = /^["'].*["']$/.test(match);
        const cleanedText = isMarked ? match.slice(1, -1) : match.trim();

        // Розбиваємо текст на окремі слова
        const words = cleanedText.split(/\s+/).filter(Boolean);

        // Додаємо слова до масиву
        for (const [index, word] of words.entries()) {
            const isLast = isMarked && index === words.length - 1;
            const isFirst = isMarked && !index
            parts.push({
                text: word,
                marked: isMarked,
                ...(isLast && { last: true }),
                ...(isFirst && { first: true }),
            });
        }

        return match;
    });

    return parts;
})

type PositionTypes = "first" | "last"

const words = ref<{ index: number, position: PositionTypes }[]>([])

const checkUnique = (i: number, pos: PositionTypes) => !words.value.some(item => item.index === i && item.position === pos)

const pushNew = (index: number, position: PositionTypes) => checkUnique(index, position) && words.value.push({ index, position })

const wordRefs = ref<(HTMLElement | InstanceType<typeof TheMarkedSentencePart >)[]>();

function updateLineWords() {
    words.value.length = 0
    let lastPosition: number
    let lastMarkedIndex: number

    function updateLastPosition(el: HTMLElement, marked: boolean, i: number, length: number) {
        const { top } = el.getBoundingClientRect()

        if (top !== lastPosition) {
            lastPosition = top;

            marked && pushNew(i, "first");

            lastMarkedIndex && pushNew(lastMarkedIndex, "last");
        }

        (i === (length - 1)) && pushNew(marked ? i : lastMarkedIndex, "last")

        marked && (i !== lastMarkedIndex) && (lastMarkedIndex = i)
    }

    wordRefs.value && wordRefs.value.map((item, i, arr) =>
        updateLastPosition(item instanceof HTMLElement ? item : item.$el, !(item instanceof HTMLElement), i, arr.length));
}

onMounted(async () => {
    await nextTick()
    updateLineWords()
    window.addEventListener("resize", updateLineWords)
})

onUnmounted(() => document.removeEventListener("resize", updateLineWords))
</script>