import { Realtor } from "./Realtor";
import { GuidGenerator } from './Helpers/GuidGenerator';

export class Agent {
  constructor() {
    this.id = GuidGenerator.guid();
  }

  id: string;
  name: string;
  pictureUrl: string;
  realtor: Realtor;
}
