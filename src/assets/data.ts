import { EnSkillArea } from "../app/models/skill-area.enum";
import { ConfigModel } from "@app/models/config.model";

export const data: ConfigModel = {
  personalInfo: {
    name: "Max Mustermann",
    mail: "maxmustermann@mail.de",
  },
  skills: [
    {
      area: EnSkillArea.frontend,
      label: "HTML",
      iconName: "html.svg",
      duration: 4,
      usage: "University and all companies",
      description: "Small description of HTML journey.",
    },
    {
      area: EnSkillArea.frontend,
      label: "CSS",
      iconName: "css.svg",
      duration: 4,
      usage: "University and all companies",
      description: "Small description of CSS journey.",
    },
    {
      area: EnSkillArea.frontend,
      label: "JavaScript",
      iconName: "javascript_2.svg",
      duration: 1,
      usage: "Company #2 and Udemy course",
      description: "Small description of JavaScript journey.",
    },
    {
      area: EnSkillArea.frontend,
      label: "TypeScript",
      iconName: "typescript.svg",
      duration: 3,
      usage: "Company #1 and #2",
      description: "Small description of TypeScript journey.",
    },
    {
      area: EnSkillArea.frontend,
      label: "Angular",
      iconName: "angular.svg",
      duration: 3,
      usage: "Company #1 and #2",
      description: "Small description of Angular journey.",
    },
    {
      area: EnSkillArea.frontend,
      label: "Lit",
      iconName: "lit.svg",
      duration: 0.25,
      usage: "Personal project",
      description: "Small description of Lit journey.",
    },
    {
      area: EnSkillArea.backend,
      label: "C#",
      iconName: "angular.svg",
      duration: 0.25,
      usage: "Company #2",
      description: "Small description of C# journey.",
    },
    {
      area: EnSkillArea.backend,
      label: "Asp.Net",
      iconName: "angular.svg",
      duration: 0.1,
      usage: "Company #2",
      description: "Small description of Asp.Net journey.",
    },
    {
      area: EnSkillArea.backend,
      label: "Java",
      iconName: "java.svg",
      duration: 0.2,
      usage: "University Bachelors degree",
      description: "Small description of Java journey.",
    },
  ],
  work: [
    {
      imageName: "statista_img_dummy.png",
      label: "Statista Program",
      description:
        "This is the description for the Statista Program. It was a pretty complex project. Not too long.",
      tags: [
        {
          label: "JavaScript",
          area: EnSkillArea.frontend,
          color: "#000000",
        },
        {
          label: "HTML",
          area: EnSkillArea.frontend,
          color: "#000000",
        },
        {
          label: "CSS",
          area: EnSkillArea.frontend,
          color: "#000000",
        },
      ],
      sourceUrl: "www.google.com",
      liveUrl: "www.google.com",
    },
    {
      imageName: "find_my_friends_img_dummy.png",
      label: "UI Project",
      description:
        "The UI Project was a lot of fun with limited complexity and a lot of bubble gum. Not too long.",
      tags: [
        {
          label: "Angular",
          area: EnSkillArea.frontend,
          color: "#000000",
        },
        {
          label: "SCSS",
          area: EnSkillArea.frontend,
          color: "#000000",
        },
        {
          label: "C#",
          area: EnSkillArea.backend,
          color: "#000000",
        },
      ],
      sourceUrl: "www.google.com",
      liveUrl: "www.google.com",
    },
  ],
  showScrollUp: true,
  menu: {
    showMenu: true,
    logoCaption: "Max Mustermann",
    showLanguageSelector: true,
  },
  showSpinner: true,
  showcase: {
    heading: "Full-Stack Web Developer",
    description:
      "I develop applications for businesses. This is some dummy text to check out the responsiveness of my layout. Have fun.",
    socials: [
      {
        iconName: "instagram.svg",
        url: "https://www.instagram.com/max.dev",
      },
      {
        iconName: "envelope.svg",
        url: "mailto:",
      },
    ],
  },
  showContact: true,
};
