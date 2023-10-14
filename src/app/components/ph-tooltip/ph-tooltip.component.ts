import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-tooltip.component.scss.ts";

@customElement("ph-tooltip")
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
