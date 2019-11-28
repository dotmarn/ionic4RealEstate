import { Suburb } from "./Suburb";
import { GuidGenerator } from "./Helpers/GuidGenerator";
import { PropertyType } from "./PropertyType";

export class SearchItem {
  constructor() {
    this.id = GuidGenerator.guid();
  }

  id: string;
  locations: Suburb[] = [];
  propertyTypes: PropertyType[] = [];
  isBuy: boolean;
  lowPrice: number;
  highPrice: number;
  bedroomsCount: number;
  bathroomsCount: number;
  carSpacesCount: number;
}
