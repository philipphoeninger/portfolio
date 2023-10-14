import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./ph-dropdown.component.scss.ts";

@customElement("ph-dropdown")
export class PhDropdown extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`<p>Test this Dropdown-Thing out</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-dropdown": PhDropdown;
  }
}
