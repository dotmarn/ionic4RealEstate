import { SchoolSector } from "./SchoolSector";
import { SchoolType } from "./SchoolType";

export class School {
  constructor() {}

  id: string;
  name: string;
  sector: SchoolSector;
  type: SchoolType;
  distance: number;
}
