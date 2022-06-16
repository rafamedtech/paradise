<script setup>
import { ref, reactive } from "vue";
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail } from "@mdi/js";
import MainSection from "@/components/MainSection.vue";
import TitleBar from "@/components/TitleBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import CheckRadioPicker from "@/components/CheckRadioPicker.vue";
import FilePicker from "@/components/FilePicker.vue";
import HeroBar from "@/components/HeroBar.vue";
import Field from "@/components/Field.vue";
import Control from "@/components/Control.vue";
import Divider from "@/components/Divider.vue";
import JbButton from "@/components/JbButton.vue";
import JbButtons from "@/components/JbButtons.vue";
import BottomOtherPagesSection from "@/components/BottomOtherPagesSection.vue";
import TitledSection from "@/components/TitledSection.vue";
import TitleSubBar from "@/components/TitleSubBar.vue";

const titleStack = ref(["Inicio", "Contratos", "Nuevo Contrato"]);

const selectPlazoOptions = [
  { id: 1, label: "4 meses" },
  { id: 2, label: "6 meses" },
  { id: 3, label: "12 meses" },
];

const selectPlanOptions = [
  { id: 1, label: "Repisa chica" },
  { id: 2, label: "Repisa mediana" },
  { id: 3, label: "Repisa grande" },
];

const form = reactive({
  suscriptor: "John Doe",
  plan: selectPlanOptions[0],
  plazo: selectPlazoOptions[0],
  fecha_inicio: Date.now(),
  fecha_fin: Date.now(),
  status: "Activo",
  descuento: "",
  tipoDescuento: "money",
  total: 0,
});

const customElementsForm = reactive({
  checkbox: ["lorem"],
  radio: "one",
  switch: ["one"],
  file: null,
});

const submit = () => {
  //
};
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Nuevo contrato</hero-bar>

  <main-section>
    <title-sub-bar
      :icon="mdiBallotOutline"
      title="Crear un contrato para un suscriptor nuevo o existente"
    />
    <card-component
      title="Datos del contrato"
      :icon="mdiBallot"
      form
      @submit.prevent="submit"
    >
      <field label="Plan">
        <control v-model="form.plan" :options="selectPlanOptions" />
        <control v-model="form.plazo" :options="selectPlazoOptions" />
      </field>

      <field
        label="Suscriptor"
        help="Escribe el nombre del suscriptor para filtrar"
        class="w-1/2 pr-2"
      >
        <control
          v-model="form.suscriptor"
          type="text"
          placeholder="Suscriptor"
          :icon="mdiAccount"
        />
      </field>

      <field label="Descuento" class="w-1/2 pr-2">
        <control v-model="form.descuento" />

        <check-radio-picker
          v-model="form.tipoDescuento"
          name="sample-radio"
          type="radio"
          :options="{ money: '$', percentage: '%' }"
        />
        <!-- <field label="Tipo" wrap-body> </field> -->
      </field>

      <!-- <divider /> -->
      <!-- 
      <field label="Question" help="Your question. Max 255 characters">
        <control type="textarea" placeholder="Explain how we can help you" />
      </field> -->

      <divider />

      <jb-buttons>
        <jb-button type="submit" color="info" label="Crear contrato" />
        <jb-button type="reset" color="info" outline label="Reset" />
      </jb-buttons>
    </card-component>
  </main-section>

  <!-- <titled-section> Custom elements </titled-section>

  <main-section>
    <card-component title="Custom elements" :icon="mdiBallotOutline">
      <field label="Checkbox" wrap-body>
        <check-radio-picker
          v-model="customElementsForm.checkbox"
          name="sample-checkbox"
          :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }"
        />
      </field>

      <divider />

      <field label="Radio" wrap-body>
        <check-radio-picker
          v-model="customElementsForm.radio"
          name="sample-radio"
          type="radio"
          :options="{ one: 'One', two: 'Two' }"
        />
      </field>

      <divider />

      <field label="Switch">
        <check-radio-picker
          v-model="customElementsForm.switch"
          name="sample-switch"
          type="switch"
          :options="{ one: 'One', two: 'Two' }"
        />
      </field>

      <divider />

      <file-picker v-model="customElementsForm.file" />
    </card-component>
  </main-section> -->
</template>
