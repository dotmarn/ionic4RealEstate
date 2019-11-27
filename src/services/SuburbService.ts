import { Injectable } from "@angular/core";

import { Suburb } from "src/data/Suburb";
import { Randomizer } from "src/data/Helpers/Randomizer";

@Injectable({
  providedIn: "root"
})
export class SuburbService {
  innerSuburbs: Suburb[] = [
    new Suburb("Bowen Hills"),
    new Suburb("Brisbane"),
    new Suburb("East Brisbane"),
    new Suburb("Fortitude Valley"),
    new Suburb("Herston"),
    new Suburb("Highgate Hill"),
    new Suburb("Kangaroo Point"),
    new Suburb("Kelvin Grove"),
    new Suburb("New Farm"),
    new Suburb("Newstead"),
    new Suburb("Paddington"),
    new Suburb("Petrie Terrace"),
    new Suburb("Red Hill"),
    new Suburb("South Brisbane"),
    new Suburb("Spring Hill"),
    new Suburb("Teneriffe"),
    new Suburb("West End"),
    new Suburb("Woolloongabba")
  ];

  constructor() {}

  getRandomSuburb() {
    return this.innerSuburbs[
      Randomizer.random(0, this.innerSuburbs.length - 1)
    ];
  }

  search(searchValue: string): Suburb[] {
    var foundSuburbs = [];

    this.innerSuburbs.forEach(suburb => {
      if (suburb.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        foundSuburbs.push(suburb);
      }
    });

    return foundSuburbs;
  }
}
