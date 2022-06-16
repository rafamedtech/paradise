import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiResponsive,
  mdiPalette,
  mdiStoreSettings,
  mdiInformation,
  mdiSignatureFreehand,
  mdiBoxingGlove,
  mdiFileDocumentMultiple,
  mdiDatabase,
  mdiCashRegister,
  mdiNotebookCheck,
} from "@mdi/js";

export default [
  "General",
  [
    {
      to: "/",
      icon: mdiDesktopMac,
      label: "Dashboard",
    },
  ],
  "Menu",
  [
    {
      to: "/caja",
      label: "Caja",
      icon: mdiCashRegister,
    },
    {
      to: "/contratos",
      label: "Contratos",
      icon: mdiFileDocumentMultiple,
    },
    {
      to: "/suscriptores",
      label: "Suscriptores",
      icon: mdiAccountCircle,
    },
    {
      to: "/ui",
      label: "Inventario",
      icon: mdiDatabase,
    },
    {
      to: "/reportes",
      label: "Reportes",
      icon: mdiNotebookCheck,
    },
  ],
  "Otro",
  [
    {
      href: "https://github.com/justboil/admin-one-vue-tailwind",
      label: "Acerca de",
      icon: mdiInformation,
      target: "_blank",
    },
  ],
];
