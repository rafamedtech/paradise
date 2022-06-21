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

const titleStack = ref(["Inicio", "Contratos", "Nuevo Producto"]);

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
      title="Agregar un nuevo producto al inventario"
    />
    <card-component
      title="Datos del producto"
      :icon="mdiBallot"
      form
      @submit.prevent="submit"
    >
      <field label="Producto">
        <field
          label="Suscriptor"
          help="Escribe el nombre de una categoria nueva o una existente."
        >
          <control
            v-model="form.suscriptor"
            type="text"
            placeholder="Suscriptor"
            :icon="mdiAccount"
          />
        </field>

        <field label="Nombre del articulo">
          <control />
        </field>
      </field>

      <field>
        <field label="Categoria">
          <control />
        </field>
        <field label="Departamento">
          <control />
        </field>
      </field>

      <field>
        <field label="Precio">
          <control />
        </field>

        <field label="Cantidad">
          <control type="number" />
        </field>
      </field>

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
