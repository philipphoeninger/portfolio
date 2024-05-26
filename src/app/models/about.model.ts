import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";
import { AboutEntryModel } from "./aboutEntry.model";

@jsonObject
export class AboutModel {
  @jsonMember({ constructor: Boolean })
  visible: boolean;

  @jsonArrayMember(AboutEntryModel)
  entries: AboutEntryModel[];
}
