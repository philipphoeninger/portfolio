import { jsonMember, jsonArrayMember, jsonObject } from "typedjson";

@jsonObject
export class WorkModel {
  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: String })
  description: string;

  @jsonArrayMember(String)
  tags: string[];

  @jsonMember({ constructor: String })
  sourceUrl: string;

  @jsonMember({ constructor: String })
  liveUrl: string;

  @jsonMember({ constructor: String })
  imageName: string;
}
