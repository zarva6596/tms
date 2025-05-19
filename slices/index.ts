import { defineSliceZoneComponents } from "@prismicio/vue";
import { defineAsyncComponent } from "vue";

export const components = defineSliceZoneComponents({
  cards_section: defineAsyncComponent(() => import("./CardsSection/index.vue")),
  comparison_section: defineAsyncComponent(
    () => import("./ComparisonSection/index.vue"),
  ),
  faq_section: defineAsyncComponent(() => import("./FaqSection/index.vue")),
  history_section: defineAsyncComponent(
    () => import("./HistorySection/index.vue"),
  ),
  info_text_section: defineAsyncComponent(
    () => import("./InfoSection/index.vue"),
  ),
  main_section: defineAsyncComponent(() => import("./MainSection/index.vue")),
  reviews_slider: defineAsyncComponent(
    () => import("./ReviewsSlider/index.vue"),
  ),
  steps_section: defineAsyncComponent(() => import("./StepsSection/index.vue")),
});
