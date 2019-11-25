import { Component, OnInit } from "@angular/core";

import { SuburbService } from "src/services/suburbService";
import { SearchService } from "src/services/SearchService";
import { ModalService } from "src/services/ModalService";

import { Suburb } from "src/data/Suburb";
import { Randomizer } from "src/data/Helpers/Randomizer";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  isSearching = false;
  searchValue: string = "";

  includeSurroundingSuburbs: boolean = true;
  currentLocation: Suburb = new Suburb("Current location");

  suggestedLocations: Suburb[] = [];
  recentLocations: Suburb[] = [];
  searchLocations: Suburb[] = [];

  constructor(
    private modalService: ModalService,
    private searchService: SearchService,
    private suburbService: SuburbService
  ) {}

  ngOnInit() {
    this.initialiseRecentLocations();
    this.initialiseSuggestedLocations();

    this.listenForSearchInput(500);
  }

  listenForSearchInput(timeoutTime: number): any {
    setTimeout(() => {
      const searchInput = <HTMLInputElement>(
        document.getElementById("searchInput")
      );

      let timeout = null;

      searchInput.onkeyup = () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          if (this.searchValue === "") {
            this.clearSearchInput();
          } else {
            this.clearSuggestedLocations();
            this.isSearching = true;

            var foundSuburbs = this.searchService.search(this.searchValue);
            this.suggestedLocations = this.suggestedLocations.concat(
              foundSuburbs
            );
          }
        }, timeoutTime);
      };
    }, 500);
  }

  clearSearchInput(): any {
    this.clearSuggestedLocations();

    const searchInput = <HTMLInputElement>(
      document.getElementById("searchInput")
    );
    searchInput.value = "";

    this.isSearching = false;
  }

  clearSuggestedLocations() {
    this.suggestedLocations.splice(1, this.suggestedLocations.length - 1);
  }

  initialiseRecentLocations() {
    var randomCount = Randomizer.random(1, 5);

    for (let i = 0; i < randomCount; i++) {
      this.recentLocations.push(this.suburbService.getRandomSuburb());
    }
  }

  initialiseSuggestedLocations() {
    this.suggestedLocations.push(this.currentLocation);
  }

  addRemoveLocation(location: Suburb) {
    if (location.isSearchFilter) {
      this.removeLocation(location);
    } else {
      this.addLocation(location);
    }
  }

  addLocation(location: Suburb) {
    this.searchLocations.push(location);
    location.isSearchFilter = true;
  }

  removeLocation(location: Suburb) {
    var index = this.searchLocations.findIndex(e => {
      return e.id === location.id;
    });

    if (index > -1) {
      this.searchLocations.splice(index, 1);
      location.isSearchFilter = false;
    }
  }

  close() {
    this.modalService.dismiss(false);
  }

  done() {
    this.modalService.dismiss(true);
  }
}
