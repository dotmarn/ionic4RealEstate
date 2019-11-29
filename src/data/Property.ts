import { Agent } from "./Agent";
import { Suburb } from "./Suburb";
import { PropertyType } from "./PropertyType";
import { School } from "./School";

export class Property {
  constructor() {}

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
