import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";

@jsonObject
export class ShowcaseModel {
  @jsonMember({ constructor: String })
  heading: string;

  @jsonMember({ constructor: String })
  description: string;

  @jsonMember({ constructor: String })
  btnCaption: string;

  @jsonArrayMember(Object)
  socials: { iconName: string; url: string }[];

  @jsonArrayMember(String)
  imgNames: string[];
}
