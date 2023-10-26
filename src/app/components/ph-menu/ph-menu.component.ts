import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-menu.component.scss.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";

@customElement("ph-menu")
@localized()
export class PhMenu extends LitElement {
  static get styles() {
    return [style];
  }

  // @property({ type: Array }) options: { name: string; link: string }[] = [];

  render() {
    return html`<p>X</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-menu": PhMenu;
  }
}
