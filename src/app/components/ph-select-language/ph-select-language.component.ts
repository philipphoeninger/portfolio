import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-select-language.component.scss.ts";

@customElement("ph-select-language")
export class PhSelectLanguage extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`<p>X</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-select-language": PhSelectLanguage;
  }
}
