<script setup>
import { mdiThemeLightDark } from "@mdi/js";
import { useMainStore } from "@/stores/main";
import { computed } from "vue";

import Level from "@/components/Level.vue";
import JbButton from "@/components/JbButton.vue";

const mainStore = useMainStore();

const lightBorderStyle = computed(() => mainStore.lightBorderStyle);

const darkMode = computed(() => mainStore.darkMode);

const darkModeToggle = () => {
  mainStore.setDarkMode();
};
</script>

<template>
  <section
    :class="lightBorderStyle"
    class="bg-white border-t border-b p-6 dark:bg-gray-900/70 dark:border-gray-900 dark:text-white"
  >
    <level v-if="$route.path === '/contratos'">
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <jb-button
        color="info"
        label="Nuevo contrato"
        :to="{ name: 'Nuevo contrato' }"
      />
    </level>
    <level v-if="$route.path === '/suscriptores'">
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <jb-button
        color="info"
        label="Nuevo suscriptor"
        :to="{ name: 'Nuevo suscriptor' }"
      />
    </level>
  </section>
</template>
