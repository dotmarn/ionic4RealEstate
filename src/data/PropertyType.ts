import { GuidGenerator } from "./Helpers/GuidGenerator";

export class PropertyType {
  constructor(name: string) {
    this.id = GuidGenerator.guid();
    this.name = name;
    this.isSelected = false;
  }

  id: string;
  name: string;
  isSelected: boolean;
}
