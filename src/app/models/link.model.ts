import { jsonMember, jsonObject } from "typedjson";

@jsonObject
export class LinkModel {
  @jsonMember({ constructor: Number })
  id: number;

  @jsonMember({ constructor: String })
  caption: string;
}
