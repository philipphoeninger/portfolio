import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-select-locale.component.css.ts";
import { getLocale, setLocaleFromUrl } from "../../localization.ts";
import { localized } from "@lit/localize";
import { allLocales } from "../../../assets/i18n/locale-codes.js";

const localeNames: {
  [L in (typeof allLocales)[number]]: string;
} = {
  en: "English",
  "de-DE": "Deutsch",
  "es-ES": "Español",
  "fr-FR": "Français",
  "it-IT": "Italiano",
  "ja-JP": "日本語",
  "tr-TR": "Türkçe",
  "zh-Hans": "简体中文",
};

@customElement("ph-select-locale")
@localized()
export class PhSelectLocale extends LitElement {
  static get styles() {
    return [style];
  }

  localeChanged(event: Event) {
    const newLocale = (event.target as HTMLSelectElement).value;
    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set("locale", newLocale);
      window.history.pushState(null, "", url.toString());
      setLocaleFromUrl();
    }
  }

  render() {
    // <img
    //   src="./src/assets/img/es.png"
    //   alt="Portrait Image"
    //   height="27"
    //   width="40"
    // />;
    return html`<select @change=${this.localeChanged}>
      ${allLocales.map(
        (locale) =>
          html`<option value=${locale} ?selected=${locale === getLocale()}>
            ${localeNames[locale]}
          </option>`
      )}
    </select>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-select-locale": PhSelectLocale;
  }
}
