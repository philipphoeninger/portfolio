import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { style } from "./ph-contact.component.css.ts";
import { EnSocial } from "src/app/models/social.enum.ts";

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
    return html` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div id="social-media">
        <ul>
          <li>
            <a href="index.html">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-solid fa-download"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- <hr /> -->
      <div id="email-section">
        <a href="mailto:philipphoeninger@web.de">philipphoeninger@web.de</a>
        <i class="fa-solid fa-copy"></i>
      </div>
      <!-- <hr /> -->

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
