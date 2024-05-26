import { jsonMember, jsonObject } from "typedjson";

@jsonObject
export class AboutDescriptionEntryModel {
  @jsonMember({ constructor: Number })
  id: Number;

  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: String })
  iconUrl: string;
}
