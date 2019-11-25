import { Injectable } from "@angular/core";
import { SearchItem } from "src/data/SearchItem";
import { Randomizer } from "src/data/Helpers/Randomizer";
import { SuburbService } from "./suburbService";
import { Suburb } from "src/data/Suburb";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  previousSearches: SearchItem[] = [];

  constructor(private suburbService: SuburbService) {
    this.initPreviousSearches();
  }

  initPreviousSearches() {
    var searchesCount = Randomizer.random(0, 3);

    for (let i = 0; i < searchesCount; i++) {
      var searchItem = new SearchItem();

      // Locations
      var locationsCount = Randomizer.random(1, 5);

      for (let j = 0; j < locationsCount; j++) {
        searchItem.locations.push(this.suburbService.getRandomSuburb());
      }

      // Other properties
      searchItem.isBuy = Randomizer.random(0, 1) == 1;
      searchItem.lowPrice = Math.ceil(Randomizer.random(100, 499) / 10) * 10;
      searchItem.highPrice = Math.ceil(Randomizer.random(500, 999) / 10) * 10;
      searchItem.bedroomsCount = Randomizer.random(1, 4);
      searchItem.bathroomsCount = Randomizer.random(1, 3);
      searchItem.carSpacesCount = Randomizer.random(1, 2);

      this.previousSearches.push(searchItem);
    }

    console.log(this.previousSearches);
  }

  search(searchValue: string): Suburb[] {
    var foundSuburbs = [];

    this.suburbService.innerSuburbs.forEach(suburb => {
      if (suburb.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        foundSuburbs.push(suburb);
      }
    });

    return foundSuburbs;
  }
}
