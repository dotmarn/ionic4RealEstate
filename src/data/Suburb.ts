import { GuidGenerator } from "./Helpers/GuidGenerator";

export class Suburb {
  constructor(name: string) {
    this.id = GuidGenerator.guid();
    this.name = name;
  }

  id: string;
  name: string;
  postalCode: number;
  isSearchFilter: boolean;
}
