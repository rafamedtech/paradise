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

const titleStack = ref(["Inicio", "Suscriptores", "Nuevo Suscriptor"]);

const selectOptions = [
  { id: 1, label: "4 meses" },
  { id: 2, label: "6 meses" },
  { id: 3, label: "12 meses" },
];

const form = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "",
  facebook: "",
  instagram: "",
  subject: "",
  question: "",
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
    <title-sub-bar :icon="mdiBallotOutline" title="Crear un nuevo suscriptor" />
    <card-component
      title="Datos del suscriptor"
      :icon="mdiBallot"
      form
      @submit.prevent="submit"
    >
      <field label="Datos personales">
        <control v-model="form.name" :icon="mdiAccount" />
        <control v-model="form.email" type="email" :icon="mdiMail" />
      </field>

      <field
        label="Numero de telefono"
        help="Escribe el numero de telefono sin guiones ni parentesis"
        class="w-1/2 pr-2"
      >
        <control
          v-model="form.phone"
          type="tel"
          placeholder="Your phone number"
        />
      </field>

      <field label="Redes sociales">
        <div class="flex justify-center gap-3 w-full">
          <field label="Facebook" class="w-full">
            <control v-model="form.facebook" />
          </field>
          <field label="Instagram" class="w-full">
            <control v-model="form.instagram" />
          </field>
        </div>
      </field>

      <!-- <divider /> -->

      <!-- <field label="Question" help="Your question. Max 255 characters">
        <control type="textarea" placeholder="Explain how we can help you" />
      </field> -->

      <divider />

      <jb-buttons>
        <jb-button type="submit" color="info" label="Crear suscriptor" />
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
