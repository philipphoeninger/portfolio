import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import { ShowcaseModel } from "./showcase.model";
import { SkillModel } from "./skill.model";
import { WorkModel } from "./work.model";

@jsonObject
export class ConfigModel {
  @jsonMember({ constructor: Boolean })
  showScrollUp: boolean = true;
  @jsonMember({ constructor: Object })
  menu?: {
    showMenu: boolean;
    logoCaption: string;
  };
  @jsonMember({ constructor: Boolean })
  showSpinner: boolean = true;
  @jsonMember({ constructor: ShowcaseModel })
  showcase?: ShowcaseModel;
  // @jsonMember({ constructor: String })
  // contact?: string;
  @jsonArrayMember(SkillModel)
  skills: SkillModel[];
  @jsonArrayMember(WorkModel)
  work: WorkModel[];
  @jsonMember({ constructor: Boolean })
  showContact: boolean = true;
}
