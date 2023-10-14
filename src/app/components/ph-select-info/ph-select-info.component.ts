import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-select-info.component.scss.ts";

@customElement("ph-select-info")
export class PhSelectInfo extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`<p>X</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-select-info": PhSelectInfo;
  }
}
