import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-select-info.component.scss.ts";
import { SkillModel } from "@app/models/skill.model.ts";

@customElement("ph-select-info")
export class PhSelectInfo extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) skills: SkillModel[] = [];

  render() {
    return html`<ph-dropdown>X</ph-dropdown>
      <div>
        <ul>
          ${this.skills.map((skill) => {
            return html`<li>
              <div>${skill.label}</div>
              <div>${skill.duration}</div>
              <div>${skill.usage}</div>
              <div>${skill.description}</div>
            </li>`;
          })}
        </ul>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-select-info": PhSelectInfo;
  }
}
