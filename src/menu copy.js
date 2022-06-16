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
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiSettingsHelper,
  mdiStarSettings,
  mdiStoreSettings,
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
  "Examples",
  [
    {
      to: "/tables",
      label: "Tables",
      icon: mdiTable,
    },
    {
      to: "/forms",
      label: "Forms",
      icon: mdiSquareEditOutline,
    },
    {
      to: "/ui",
      label: "UI",
      icon: mdiTelevisionGuide,
    },
    {
      to: "/responsive",
      label: "Responsive",
      icon: mdiResponsive,
    },
    {
      to: "/",
      label: "Styles",
      icon: mdiPalette,
    },
    {
      to: "/profile",
      label: "Profile",
      icon: mdiAccountCircle,
    },
    {
      to: "/login",
      label: "Login",
      icon: mdiLock,
    },
    {
      to: "/error",
      label: "Error",
      icon: mdiAlertCircle,
    },
    {
      label: "Submenus",
      subLabel: "Submenus Example",
      icon: mdiViewList,
      menu: [
        {
          label: "Sub-item One",
        },
        {
          label: "Sub-item Two",
        },
      ],
    },
  ],
  "About",
  [
    {
      href: "https://github.com/justboil/admin-one-vue-tailwind",
      label: "Settings",
      icon: mdiStoreSettings,
      target: "_blank",
    },
  ],
];
