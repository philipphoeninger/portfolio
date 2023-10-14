import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./ph-dropdown.component.scss.ts";

@customElement("ph-dropdown")
export class PhDropdown extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`<div id="container">Dropdown Box</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-dropdown": PhDropdown;
  }
}
