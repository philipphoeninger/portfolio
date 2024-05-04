import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-select-info.component.css.ts";
import { SkillModel } from "@app/models/skill.model.ts";

@customElement("ph-select-info")
export class PhSelectInfo extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) skills: SkillModel[] = [];
  @property({ type: Array }) skillAreas: { id: number; caption: string }[] = [];

  render() {
    return html`
      <ph-dropdown options="${JSON.stringify(this.skillAreas)}"></ph-dropdown>
      <div class="select-info-container">
        <div class="select-info-header">
          <ul>
            ${this.skills.map((skill) => {
              return html`<li>${skill.label}</li>`;
            })}
          </ul>
        </div>
        <div class="select-info-content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor i
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-select-info": PhSelectInfo;
  }
}
