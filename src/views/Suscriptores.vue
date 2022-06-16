<script setup>
import { ref } from "vue";
import {
  mdiBellCheck,
  mdiTableBorder,
  mdiTableOff,
  mdiFileDocument,
} from "@mdi/js";
import MainSection from "@/components/MainSection.vue";
import Notification from "@/components/Notification.vue";
import ClientsTable from "@/components/ClientsTable.vue";
import CardComponent from "@/components/CardComponent.vue";
import TitleBar from "@/components/TitleBar.vue";
import HeroBar from "@/components/HeroBar.vue";
import BottomOtherPagesSection from "@/components/BottomOtherPagesSection.vue";
import TitleSubBar from "@/components/TitleSubBar.vue";

const titleStack = ref(["Inicio", "Suscriptores"]);
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>{{ titleStack[1] }}</hero-bar>
  <main-section>
    <!-- <notification color="info" :icon="mdiBellCheck">
      <b>Contrato creado correctamente!</b>
    </notification> -->

    <card-component
      class="mb-6"
      title="Todos los suscriptores"
      :icon="mdiFileDocument"
      has-table
    >
      <clients-table />
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableBorder" title="Wrapped variation" />

    <notification color="success" :icon="mdiTableBorder">
      <b>Tightly wrapped</b> &mdash; table header becomes card header
    </notification>

    <card-component class="mb-6" has-table>
      <clients-table checkable />
    </card-component>

    <title-sub-bar :icon="mdiTableOff" title="Empty variation" />

    <notification color="danger" :icon="mdiTableOff">
      <b>Empty table.</b> When there's nothing to show
    </notification>

    <card-component empty /> -->
  </main-section>
</template>
