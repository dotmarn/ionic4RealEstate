import { SchoolSector } from "./SchoolSector";
import { SchoolType } from "./SchoolType";
import { GuidGenerator } from './Helpers/GuidGenerator';

export class School {
  constructor() {
    this.id = GuidGenerator.guid();
  }

  id: string;
  name: string;
  sector: SchoolSector;
  type: SchoolType;
  distance: number;
}
