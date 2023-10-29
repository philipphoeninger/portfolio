import { WorkModel } from "./../models/work.model";
import { SkillModel } from "./../models/skill.model";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./page.component.scss.ts";
import { data } from "../../assets/data.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import { setLocaleFromUrl } from "../localization.ts";
import { query } from "lit/decorators/query.js";

@customElement("app-page")
@localized()
export class Page extends LitElement {
  static get styles() {
    return [style];
  }

  @query("#spinner", true) _spinner: any;

  static properties = {
    skills: {
      type: Array<SkillModel>,
      attribute: false,
    },
    work: {
      type: Array<WorkModel>,
      attribute: false,
    },
    menuLinks: {
      type: Array<{ name: string; link: string }>,
      attribute: false,
    },
  };

  constructor() {
    super();
    this.skills = data.skills || {};
    this.work = data.work || {};
    this.menuLinks = [
      { name: msg("Home"), link: "todo" },
      { name: msg("Skills"), link: "todo" },
      { name: msg("Work"), link: "todo" },
      { name: msg("About"), link: "todo" },
      { name: msg("Contact"), link: "todo" },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    // Update the locale to match the URL when the user moves backwards or forwards
    // through history.
    window.addEventListener("popstate", () => {
      setLocaleFromUrl();
    });

    window.addEventListener(
      LOCALE_STATUS_EVENT,
      this.setSpinnerVisibility.bind(this)
    );
  }

  // Display a spinner whenever a new locale is loading.
  setSpinnerVisibility(event: any) {
    if (event.detail.status === "loading") {
      // console.log(`Loading new locale: ${detail.loadingLocale}`);
      this._spinner?.removeAttribute("hidden");
    } else if (event.detail.status === "ready") {
      // console.log(`Loaded new locale: ${detail.readyLocale}`);
      this._spinner?.setAttribute("hidden", "");
    } else if (event.detail.status === "error") {
      // console.error(
      //   `Error loading locale ${detail.errorLocale}: ` + detail.errorMessage
      // );
      this._spinner?.setAttribute("hidden", "");
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("popstate", () => {
      setLocaleFromUrl();
    });
    window.removeEventListener(LOCALE_STATUS_EVENT, this.setSpinnerVisibility);
  }

  render() {
    async () => {
      try {
        // Defer first render until our initial locale is ready, to avoid a flash of
        // the wrong locale.
        await setLocaleFromUrl();
      } catch (e) {
        // Either the URL locale code was invalid, or there was a problem loading
        // the locale module.
        console.error(`Error loading locale: ${(e as Error).message}`);
      }
    };
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <ph-menu
        logoCaption="Max.dev"
        options="${JSON.stringify(this.menuLinks)}"
      ></ph-menu>
      <main id="main-container">
        <a id="top"></a>
        <mwc-circular-progress
          id="spinner"
          indeterminate
          hidden
          style="position: absolute; top: 50%; left: 50%"
        ></mwc-circular-progress>
        <section id="showcase">
          <picture id="portrait">
            <!-- <source
      media="(min-width: 650px)"
      srcset="./src/assets/img/portrait.jpg"
    />
    <source
      media="(min-width: 465px)"
      srcset="./src/assets/img/portrait.jpg"
    /> -->
            <img
              src="./src/assets/img/portrait.png"
              alt="Portrait Image"
              height="300"
              width="300"
            />
          </picture>
          <h1>${msg("Full-Stack Web Developer", { desc: "TODO" })}</h1>
          <p id="text">
            ${msg(
              "Hi, I'm Max, an aspiring Full-Stack Web Developer based in Munich, Germany.",
              { desc: "TODO" }
            )}
          </p>
          <div id="social-media">
            <ul>
              <li>
                <a href="index.html">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fa-solid fa-envelope"></i>
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
        </section>

        <section id="skills" class="container-section">
          <h2>${msg("Skills", { desc: "TODO" })}</h2>
          <ph-select-info
            skills="${JSON.stringify(this.skills)}"
          ></ph-select-info>
        </section>

        <section id="work" class="container-section">
          <h2>${msg("Work", { desc: "TODO" })}</h2>
          <ul>
            ${this.work.map(
              (workEntry: WorkModel) =>
                html`<ph-card
                  class="work-entry"
                  imageName="${workEntry.imageName}"
                  label="${workEntry.label}"
                  description="${workEntry.description}"
                  sourceUrl="${workEntry.sourceUrl}"
                  liveUrl="${workEntry.liveUrl}"
                  tags="${JSON.stringify(workEntry.tags)}"
                ></ph-card>`
            )}
          </ul>
        </section>

        <section id="about" class="container-section">
          <h2>${msg("About", { desc: "TODO" })}</h2>
        </section>

        <section id="contact" class="container-section">
          <h2>${msg("Contact", { desc: "TODO" })}</h2>
          <div id="mail" class="social">
            <a href="index.html">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="mailto:maxmustermann@mail.de">maxmustermann@mail.de</a>
            <hr />
          </div>
          <div id="linkedIn" class="social">
            <a href="index.html">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="index.html">www.linkedin.com/in/max-mustermann</a>
            <hr />
          </div>
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
              placeholder="${msg("Or type your message here...", {
                desc: "TODO",
              })}"
            ></textarea>
            <button type="submit">
              ${msg("Send", { desc: "TODO" })}
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>

        <a href="#top">UP</a>
      </main>
      <footer id="footer">
        <p>Copyright &copy; 2023. All rights are reserved</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-page": Page;
  }
}
