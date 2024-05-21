import { jsonMember, jsonObject } from "typedjson";

@jsonObject
export class SkillValueModel {
  @jsonMember({ constructor: Number })
  id: number;

  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: String })
  iconUrl: string;

  @jsonMember({ constructor: Number })
  progress: number;

  @jsonMember({ constructor: String })
  description: string;
}
