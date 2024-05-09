import { Page } from "./app/page/page.component";
import { PhCard } from "./app/components/ph-card/ph-card.component";
import { PhDropdown } from "./app/components/ph-dropdown/ph-dropdown.component";
import { PhMenu } from "./app/components/ph-menu/ph-menu.component";
import { PhSelectInfo } from "./app/components/ph-select-info/ph-select-info.component";
import { PhSelectLocale } from "./app/components/ph-select-locale/ph-select-locale.component";
import { PhTooltip } from "./app/components/ph-tooltip/ph-tooltip.component";
import { PhShowcase } from "./app/components/ph-showcase/ph-showcase.component";
import { PhContact } from "./app/components/ph-contact/ph-contact.component";
import { PhButton } from "./app/components/ph-button/ph-button.component";
import { PhScroller } from "./app/components/ph-scroller/ph-scroller.component";

export const components = [
  PhShowcase,
  PhButton,
  PhScroller,
  PhCard,
  PhDropdown,
  PhMenu,
  PhSelectInfo,
  PhSelectLocale,
  PhTooltip,
  PhContact,
  Page,
];

let colorMode = localStorage.getItem("ph-colorMode");
const colorModeToggle = document.querySelector("#colorModeToggle");

const enableDarkMode = () => {
  document.querySelector("#app")?.classList.add("dark");
  localStorage.setItem("ph-colorMode", "dark");
};

const disableDarkMode = () => {
  document.querySelector("#app")?.classList.remove("dark");
  localStorage.removeItem("ph-colorMode");
};

if (colorMode === "dark") {
  enableDarkMode();
}

colorModeToggle?.addEventListener("click", () => {
  // cp suggests this:
  // colorMode = colorMode === "dark" ? "light" : "dark";
  // localStorage.setItem("ph-colorMode", colorMode);
  // document.documentElement.setAttribute("ph-colorMode", colorMode);

  // solution from kp:
  // document.querySelector("#app")?.classList.remove("dark");
  colorMode = localStorage.getItem("ph-colorMode");
  if (colorMode !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
