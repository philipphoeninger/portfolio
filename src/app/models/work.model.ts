import { jsonMember, jsonArrayMember, jsonObject } from "typedjson";
import { TagModel } from "./tag.model";

@jsonObject
export class WorkModel {
  @jsonMember({ constructor: String })
  label: string;

  @jsonMember({ constructor: String })
  description: string;

  @jsonArrayMember(TagModel)
  tags: TagModel[];

  @jsonMember({ constructor: String })
  sourceUrl: string;

  @jsonMember({ constructor: String })
  liveUrl: string;

  @jsonMember({ constructor: String })
  imageName: string;
}
