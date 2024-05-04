import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./ph-tooltip.component.css.ts";
import { msg, localized } from "@lit/localize";

@customElement("ph-tooltip")
@localized()
export class PhTooltip extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`<p>X</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-tooltip": PhTooltip;
  }
}
