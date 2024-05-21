import { EnSkillArea } from "./skill-area.enum";
import { jsonMember, jsonObject } from "typedjson";
import { SkillValueModel } from "./skillValue.model";

@jsonObject
export class SkillModel {
  @jsonMember({ constructor: Number })
  id: Number;

  @jsonMember({ constructor: Number })
  key: EnSkillArea;

  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: String })
  description: string;

  @jsonMember({ constructor: String })
  iconUrl: string;

  @jsonMember({ constructor: Object })
  entries: SkillValueModel[];
}
