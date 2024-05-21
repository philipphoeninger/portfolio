import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import { ShowcaseModel } from "./showcase.model";
import { SkillModel } from "./skill.model";
import { WorkModel } from "./work.model";
import { LinkModel } from "./link.model";

@jsonObject
export class ConfigModel {
  @jsonMember({ constructor: Object })
  personalInfo: {
    name: string;
    mail: string;
  };
  @jsonMember({ constructor: Boolean })
  showScrollUp: boolean = true;
  @jsonMember({ constructor: Object })
  menu: {
    showMenu: boolean;
    logoCaption: string;
    showLanguageSelector: boolean;
    links: LinkModel[];
  };
  @jsonMember({ constructor: Boolean })
  showSpinner: boolean = true;
  @jsonMember({ constructor: ShowcaseModel })
  showcase?: ShowcaseModel;
  // @jsonMember({ constructor: String })
  // contact?: string;
  @jsonMember({ constructor: String })
  skillsHeading: string;

  @jsonArrayMember(SkillModel)
  skills: SkillModel[];

  @jsonArrayMember(LinkModel)
  skillAreas: LinkModel[];
  @jsonMember({ constructor: String })
  workHeading: string;
  @jsonArrayMember(WorkModel)
  work: WorkModel[];
  @jsonMember({ constructor: Object })
  contact: {
    visible: boolean;
    heading: string;
    subHeading: string;
  };
  @jsonMember({ constructor: Boolean })
  showAbout: boolean = true;
  @jsonMember({ constructor: String })
  aboutHeading: string;
  @jsonMember({ constructor: Object })
  footer: { links: { id: number; caption: string }[] };
}
