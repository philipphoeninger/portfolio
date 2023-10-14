import { EnSkillArea } from "./skill-area.enum";
import { jsonMember, jsonArrayMember, jsonObject } from "typedjson";

@jsonObject
export class SkillModel {
  @jsonMember({ constructor: Number })
  area: EnSkillArea;

  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: String })
  iconName: string;

  @jsonMember({ constructor: Number })
  duration: number;

  @jsonMember({ constructor: String })
  usage: string;

  @jsonMember({ constructor: String })
  description: string;
}
