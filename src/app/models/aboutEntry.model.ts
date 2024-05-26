import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import { AboutDescriptionEntryModel } from "./aboutDescriptionEntry.model";

@jsonObject
export class AboutEntryModel {
  @jsonMember({ constructor: Number })
  id: Number;

  @jsonMember({ constructor: String })
  caption: string;

  @jsonMember({ constructor: String })
  iconUrl: string;

  @jsonMember({ constructor: String })
  dateRange: string;

  @jsonArrayMember(AboutEntryModel)
  description: AboutDescriptionEntryModel[];
}
