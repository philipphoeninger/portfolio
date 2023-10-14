import { WorkModel } from "./../models/work.model";
import { SkillModel } from "./../models/skill.model";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./page.component.scss.ts";
import { data } from "../../assets/data.ts";

// const converterOne = {
//   toAttribute(value: Array<SkillModel>) {
//     console.log(value);
//     return JSON.stringify(value);
//   },
//   fromAttribute(value: string) {
//     console.log(value);
//     return JSON.parse(value);
//   },
// };

@customElement("app-page")
export class Page extends LitElement {
  static get styles() {
    return [style];
  }

  static properties = {
    skills: {
      type: Array<SkillModel>,
      attribute: false,
      // converter: converterOne,
    },
    work: {
      type: Array<WorkModel>,
      attribute: false,
      // converter: converterOne,
    },
  };

  constructor() {
    super();
    this.skills = data.skills;
    this.work = data.work;
  }

  render() {
    return html`
      <header
        style="width: 100%; display: flex; justify-content: space-between"
      >
        <span>Max.dev</span><ph-menu></ph-menu>
      </header>
      <main>
        <a id="top"></a>

        <div id="hero">
          <picture>
            <!-- <source
        media="(min-width: 650px)"
        srcset="./src/assets/img/portrait.jpg"
      />
      <source
        media="(min-width: 465px)"
        srcset="./src/assets/img/portrait.jpg"
      /> -->
            <img
              src="./src/assets/img/portrait.jpg"
              alt="Portrait Image"
              height="300"
              width="433"
            />
          </picture>
          <h1>Full-Stack Web Developer</h1>
          <p>
            Hi, I'm Max, an aspiring Full-Stack Web Developer based in Munich,
            Germany.
          </p>
          <div>Icons...</div>
        </div>

        <section id="skills">
          <h2>Skills</h2>
          <ph-select-info></ph-select-info>
        </section>

        <section id="work">
          <h2>Work</h2>
          <ph-card
            imageUrl="./src/assets/img/portrait.jpg"
            label="Statista Program"
            description="This is the description for the Statista Program. It was a pretty complex project. Not too long."
            sourceLink="www.google.com"
            liveLink="www.google.com"
            tags='["JavaScript","HTML","CSS"]'
          ></ph-card>
          <ph-card
            image="./src/assets/img/portrait.jpg"
            label="UI Project"
            description="The UI Project was a lot of fun with limited complexity and a lot of bubble gum. Not too long."
            codeLink="www.google.com"
            liveLink="www.google.com"
            tags='["Angular","SCSS","C#"]'
          ></ph-card>
        </section>

        <section id="about">
          <h2>About</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div id="mail">
            Icon
            <a href="mailto:maxmustermann@mail.de">maxmustermann@mail.de</a>
          </div>
          <hr />
          <div id="likedIn">
            Icon
            <a href="index.html">www.linkedin.com/in/max-mustermann</a>
          </div>
          <hr />
          <form action="URL" method="post" enctype="multipart/form-data">
            <input
              type="text"
              name="name"
              id="name"
              size="100"
              maxlength="100"
              value=""
              required
              placeholder="Name"
            />Textfeld
            <input
              type="email"
              name="email"
              id="email"
              size="100"
              maxlength="100"
              value=""
              required
              placeholder="EMail"
            />Textfeld
            <!--cols und rows besser in CSS setzen. Textarea hat kein value-Attribut-->
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              wrap="virtual"
              placeholder="Or type your message here..."
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </section>

        <a href="#top">UP</a>
      </main>
      <footer>
        <p>Copyright c 2023. All rights reserved</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-page": Page;
  }
}
