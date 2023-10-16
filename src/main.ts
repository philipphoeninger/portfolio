import { Page } from "./app/page/page.component";
import { PhCard } from "./app/components/ph-card/ph-card.component";
import { PhDropdown } from "./app/components/ph-dropdown/ph-dropdown.component";
import { PhMenu } from "./app/components/ph-menu/ph-menu.component";
import { PhSelectInfo } from "./app/components/ph-select-info/ph-select-info.component";
import { PhSelectLocale } from "./app/components/ph-select-locale/ph-select-locale.component";
import { PhTooltip } from "./app/components/ph-tooltip/ph-tooltip.component";
import "@material/mwc-circular-progress";
import { setLocaleFromUrl } from "./app/localization";
import { LOCALE_STATUS_EVENT } from "@lit/localize";

export const components = [
  Page,
  PhCard,
  PhDropdown,
  PhMenu,
  PhSelectInfo,
  PhSelectLocale,
  PhTooltip,
  "mwc-circular-progress",
];

const spinner = document.querySelector("#spinner")!;

// Update the locale to match the URL when the user moves backwards or forwards
// through history.
window.addEventListener("popstate", () => {
  setLocaleFromUrl();
});

// Display a spinner whenever a new locale is loading.
window.addEventListener(LOCALE_STATUS_EVENT, ({ detail }) => {
  if (detail.status === "loading") {
    console.log(`Loading new locale: ${detail.loadingLocale}`);
    spinner.removeAttribute("hidden");
  } else if (detail.status === "ready") {
    console.log(`Loaded new locale: ${detail.readyLocale}`);
    spinner.setAttribute("hidden", "");
  } else if (detail.status === "error") {
    console.error(
      `Error loading locale ${detail.errorLocale}: ` + detail.errorMessage
    );
    spinner.setAttribute("hidden", "");
  }
});
