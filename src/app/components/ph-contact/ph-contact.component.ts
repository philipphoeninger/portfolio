import { html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
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

  @property({ type: Boolean }) submitSuccess: boolean = false;
  @property({ type: String }) resultMsg_1: string = "";
  @property({ type: String }) resultMsg_2: string = "";
  @property({ type: String }) resultMsg_3: string = "";

  @query("#contact-form", true) _contactForm: any;
  @query("#loading", true) _loading: any;
  @query("#result", true) _result: any;
  @query("#result--icon", true) _resultIcon: any;
  // @query("#emlink", true) _emlink: any;
  // @query("#emlink2", true) _emlink2: any;

  // copyToClipboard() {
  //   let copyText = "";
  //   try {
  //     let successful = navigator.clipboard.writeText(copyText);
  //   } catch (err) {
  //     alert("Copy failed. Please copy manually.");
  //   }
  // }

  // protected firstUpdated(): void {
  //   this._emlink.href = `mailto:`;
  //   this._emlink2.href = `mailto:`;
  // }

  configureResultMsg(success: boolean) {
    if (success) {
      this.resultMsg_1 = msg("Message sent successfully!");
      this.resultMsg_2 = msg("Thank you for your interest.");
      this.resultMsg_3 = msg("I will get back to you as soon as possible.");
    } else {
      this.resultMsg_1 = msg("Could not send the message!");
      this.resultMsg_2 = msg("I'm sorry for the inconvenience.");
      this.resultMsg_3 = msg(
        "Please contact me via one of the other channels."
      );
    }
    this.submitSuccess = success;

    this._loading.style.display = "none";
    this._result.style.display = "block";
  }

  checkFormValidity(): boolean {
    if (!this._contactForm.checkValidity()) {
      let tmpSubmit = document.createElement("button");
      this._contactForm.appendChild(tmpSubmit);
      tmpSubmit.click();
      this._contactForm.removeChild(tmpSubmit);
      return false;
    }
    return true;
  }

  submitForm(event: any) {
    event.preventDefault();

    if (!this.checkFormValidity()) return;

    this._loading.style.display = "block";
    const formData = new FormData(this._contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        if (response.status === 200) {
          this.configureResultMsg(true);
        } else {
          this.configureResultMsg(false);
        }
      })
      .catch((error) => {
        console.error(error);
        this.configureResultMsg(false);
      })
      .then(() => {
        this._contactForm.reset();
        setTimeout(() => {
          this._result.style.display = "none";
        }, 5000);
      });
  }

  render() {
    return html`
      <div id="social-media">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/philipp-hoeninger/"
              target="_blank"
            >
              <object data="${linkedInIcon}" type="image/svg+xml">
                LinkedIn SVG-Icon
              </object>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Philipp4160621" target="_blank">
              <object data="${twitterIcon}" type="image/svg+xml">
                Twitter SVG-Icon
              </object>
            </a>
          </li>
          <li>
            <a href="https://dev.to/phoeni" target="_blank">
              <object data="${devToIcon}" type="image/svg+xml">
                Dev.to SVG-Icon
              </object>
            </a>
          </li>
          <li>
            <a href="https://github.com/p-hoeni" target="_blank">
              <object data="${githubIcon}" type="image/svg+xml">
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

      <form method="post" id="contact-form" enctype="multipart/form-data">
        <input type="hidden" name="access_key" />
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
          placeholder="${msg("E-Mail", { desc: "TODO" })}"
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
          required
          minlength="5"
        ></textarea>
        <!-- hCaptcha Spam Protection -->
        <div class="h-captcha" data-captcha="true" data-theme="dark"></div>
        <div id="form-footer">
          <ph-button
            id="phButton"
            @click=${(event: any) => this.submitForm(event)}
            caption="${msg("Send", { desc: "TODO" })}"
            icon="${checkIcon}"
          ></ph-button>
          <div id="loading">
            <object data="${hourglassIcon}" type="image/svg+xml">
              Hourglass SVG Icon
            </object>
            ${msg("Sending... please wait...")}
          </div>
          <div id="result">
            <object
              id="result--icon"
              data="${this.submitSuccess ? checkIconGreen : xIcon}"
              type="image/svg+xml"
            >
              ${this.submitSuccess ? "Check" : "Cross"} SVG-Icon
            </object>
            <span class="bold">${this.resultMsg_1}</span><br />${this
              .resultMsg_2}<br />${this.resultMsg_3}
          </div>
        </div>
      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-contact": PhContact;
  }
}
