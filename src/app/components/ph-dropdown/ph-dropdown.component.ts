import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-dropdown.component.scss.ts";
import { msg, localized } from "@lit/localize";

@customElement("ph-dropdown")
@localized()
export class PhDropdown extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) options: { id: number; caption: string }[] = [];

  render() {
    return html` <div id="container">
      <select>
        ${this.options.map(
          (option) =>
            html`<option value="${option.id}">${option.caption}</option>`
        )}
      </select>
      <div id="icon">
        <span class="custom-arrow"></span>
        <span></span>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-dropdown": PhDropdown;
  }
}
