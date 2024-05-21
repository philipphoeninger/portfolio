import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { style } from "./ph-dropdown.component.css.ts";
import { msg, localized } from "@lit/localize";
import arrowDownIcon from "@assets/icons/chevron-down-solid.svg";

@customElement("ph-dropdown")
@localized()
export class PhDropdown extends LitElement {
  static get styles() {
    return [style];
  }

  @query("select") select: any;

  @property({ type: Array }) options: Array<{ id: number; label: string }> = [];

  protected firstUpdated(): void {
    this.select.addEventListener("change", (e: any) => {
      this.dispatchEvent(
        new CustomEvent("onSelect", {
          bubbles: true,
          composed: true,
          detail: { id: +e.target.value },
        })
      );
    });
  }

  render() {
    return html` <div id="container">
      <select>
        ${this.options.map(
          (option) =>
            html` <option value="${option.id}">
              <!-- <object
                data="${arrowDownIcon}"
                type="image/svg+xml"
                class="skills__icon"
              >
                Arrow Down SVG-Icon
              </object> -->
              <span>${option.label}</span>
            </option>`
        )}
      </select>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-dropdown": PhDropdown;
  }
}
