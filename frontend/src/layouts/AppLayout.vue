<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup>
import { shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import AppLayoutDefault from "@/layouts/DefaultLayout.vue";

const route = useRoute();
const layout = shallowRef(null);

// Observing the change in the route
watch(
  () => route.meta,
  async (meta) => {
    try {
      // Let's try to find the component from the meta property and dynamically import it
      const component = await import(`./${meta.layout}.vue`);
      layout.value = component?.default || AppLayoutDefault;
    } catch (e) {
      // If the component is not found, add the default template
      layout.value = AppLayoutDefault;
    }
  }
);
</script>
