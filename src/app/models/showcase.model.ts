import { jsonArrayMember, jsonMember, jsonObject } from "typedjson";

@jsonObject
export class ShowcaseModel {
  @jsonArrayMember(Object)
  socials: { iconName: string; url: string }[];

  @jsonMember({ constructor: String })
  heading: string;

  @jsonMember({ constructor: String })
  description: string;

  @jsonArrayMember(String)
  imgNames: string[];
}
