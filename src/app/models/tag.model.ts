import { EnSkillArea } from "./skill-area.enum";
import { jsonMember, jsonArrayMember, jsonObject } from "typedjson";

@jsonObject
export class TagModel {
  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: Number })
  area: EnSkillArea;

  @jsonMember({ constructor: String })
  color: string;
}
