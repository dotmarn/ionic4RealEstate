import { Agent } from "./Agent";
import { Suburb } from "./Suburb";
import { PropertyType } from "./PropertyType";
import { School } from "./School";
import { Coordinates } from "./Coordinates";
import { GuidGenerator } from "./Helpers/GuidGenerator";

export class Property {
  constructor() {
    this.id = GuidGenerator.guid();
  }

  id: string;
  agent: Agent;
  pictureUrls: string[] = [];
  price: number;
  unitNo: number;
  streetNo: number;
  streetName: string;
  suburb: Suburb;
  propertyType: PropertyType;
  bedroomsCount: number;
  bathroomsCount: number;
  carSpacesCount: number;
  areaSize: number;
  isSaved: boolean;
  coordinates: Coordinates;
  summaryTitle: string;
  summary: string;
  // features: TODO
  inspections: Date[] = [];
  nearbySchools: School[] = [];
}
