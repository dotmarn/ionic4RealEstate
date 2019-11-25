import { Suburb } from "./Suburb";
import { GuidGenerator } from "./Helpers/GuidGenerator";

export class SearchItem {
  constructor() {
    this.id = GuidGenerator.guid();
  }

  id: string;
  locations: Suburb[] = [];
  isBuy: boolean;
  lowPrice: number;
  highPrice: number;
  bedroomsCount: number;
  bathroomsCount: number;
  carSpacesCount: number;
}
