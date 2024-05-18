import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { style } from "./ph-contact.component.css.ts";
import { EnSocial } from "src/app/models/social.enum.ts";
import checkIconGreen from "@assets/icons/check-solid-green.svg";
import xIcon from "@assets/icons/xmark-solid.svg";
import checkIcon from "@assets/icons/check-solid.svg";
import linkedInIcon from "@assets/icons/linkedin.svg";
import twitterIcon from "@assets/icons/twitter.svg";
import devToIcon from "@assets/icons/devto.svg";
import githubIcon from "@assets/icons/github.svg";
import hourglassIcon from "@assets/icons/hourglass-half-solid.svg";

@customElement("ph-contact")
@localized()
export class PhContact extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) name: string = "";
  @property({ type: String }) mail: string = "";
  @property({ type: String }) phone: string = "";
  @property({ type: Array }) socials: {
    social: EnSocial;
    link: string;
    caption?: string;
  }[] = [];

  render() {
    return html`
      <div id="social-media">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/philipp-hoeninger/"
              target="_blank"
            >
              <object
                data="${linkedInIcon.substring(4, linkedInIcon.length)}"
                type="image/svg+xml"
              >
                LinkedIn SVG-Icon
              </object>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Philipp4160621" target="_blank">
              <object
                data="${twitterIcon.substring(4, twitterIcon.length)}"
                type="image/svg+xml"
              >
                Twitter SVG-Icon
              </object>
            </a>
          </li>
          <li>
            <a href="https://dev.to/phoeni" target="_blank">
              <object
                data="${devToIcon.substring(4, devToIcon.length)}"
                type="image/svg+xml"
              >
                Dev.to SVG-Icon
              </object>
            </a>
          </li>
          <li>
            <a href="https://github.com/p-hoeni" target="_blank">
              <object
                data="${githubIcon.substring(4, githubIcon.length)}"
                type="image/svg+xml"
              >
                Github SVG-Icon
              </object>
            </a>
          </li>
        </ul>
      </div>
      <!-- <div id="email-section">
        <a id="emlink">
        <i class="fa-solid fa-copy" @click=${() => this.copyToClipboard()}></i>
      </div> -->

      <form action="URL" method="post" enctype="multipart/form-data">
        <input
          type="text"
          name="name"
          id="name"
          size="10"
          maxlength="100"
          value=""
          required
          placeholder="${msg("Name", { desc: "TODO" })}"
        /><label for="name">Textfeld</label>
        <input
          type="email"
          name="email"
          id="email"
          size="10"
          maxlength="100"
          value=""
          required
          placeholder="${msg("EMail", { desc: "TODO" })}"
        /><label for="email">Textfeld</label>
        <!--cols und rows besser in CSS setzen. Textarea hat kein value-Attribut-->
        <textarea
          name="message"
          id="message"
          cols="20"
          rows="5"
          wrap="virtual"
          placeholder="${msg("Your message...", {
            desc: "TODO",
          })}"
        ></textarea>
        <ph-button
          caption="${msg("Send", { desc: "TODO" })}"
          icon="fa-regular fa-paper-plane"
        ></ph-button
        ><!-- type="submit" -->
      </form>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-contact": PhContact;
  }
}
