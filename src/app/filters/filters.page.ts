import { Component, OnInit } from "@angular/core";

import { ModalService } from "src/services/ModalService";
import { SearchService } from "src/services/SearchService";

import { SearchItem } from "src/data/SearchItem";
import { PropertyType } from "src/data/PropertyType";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.page.html",
  styleUrls: ["./filters.page.scss"]
})
export class FiltersPage implements OnInit {
  locationsText: string = "";
  isBuy: boolean = true;
  propertyTypes: PropertyType[] = [];
  priceRangeText: string = "";
  priceRange: any = { lower: 0, upper: 100 };
  priceRangeValues: number[] = [];
  bedroomsCount: number = -1;
  bathroomsCount: number = -1;
  carSpacesCount: number = -1;
  landSize: number = 0;
  isFurnished: boolean = false;
  arePetsConsidered: boolean = false;
  keywords: string = "";

  constructor(
    private modalService: ModalService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.initialisePropertyTypes();
    this.initialisePriceRangeValues();
    this.setLocationsText();
    this.setPriceRangeText(this.priceRange.lower, this.priceRange.upper);
  }

  resetFilters() {
    this.selectPropertyType(this.propertyTypes[0]);
    this.priceRange = { lower: 0, upper: 100 };
    this.bedroomsCount = -1;
    this.bathroomsCount = -1;
    this.carSpacesCount = -1;
    this.landSize = 0;
    this.isFurnished = false;
    this.arePetsConsidered = false;
    this.keywords = "";
  }

  buyRentChanged(event: any) {
    this.isBuy = event.detail.value === "buy";
  }

  selectPropertyType(selectedPropertyType: PropertyType) {
    // clear all selection and select 'All'
    if (selectedPropertyType.name === "All") {
      this.propertyTypes.forEach(propertyType => {
        propertyType.isSelected = false;
      });

      this.propertyTypes[0].isSelected = true;
    }

    // set property type as selected
    else {
      selectedPropertyType.isSelected = true;
      this.propertyTypes[0].isSelected = false;
    }
  }

  priceRangeChanged(event: any) {
    this.setPriceRangeText(event.detail.value.lower, event.detail.value.upper);
  }

  setPriceRangeText(lower: number, upper: number) {
    var lowerText = this.getPriceText(lower);
    var upperText = this.getPriceText(upper);

    if (lower == 0 && upper == 100) {
      this.priceRangeText = "Any Price";
    } else if (lower > 0 && upper == 100) {
      this.priceRangeText = "More than $" + lowerText;
    } else if (lower == 0 && upper < 100) {
      this.priceRangeText = "Up to $" + upperText;
    } else {
      this.priceRangeText = "$" + lowerText + " to " + "$" + upperText;
    }
  }

  getPriceText(value: number) {
    var priceText = "";

    var price = this.priceRangeValues[value / 2];

    if (price < 1000) {
      priceText = price.toString() + "k";
    } else {
      priceText = (price / 1000).toString() + "M";
    }

    return priceText;
  }

  setLocationsText() {
    if (this.searchService.currentSearch) {
      var locations = this.searchService.currentSearch.locations;

      for (let i = 0; i < locations.length; i++) {
        var location = locations[i];
        this.locationsText += location.name;

        if (i !== locations.length - 1) {
          this.locationsText += ", ";
        }
      }
    }
  }

  initialisePropertyTypes() {
    this.propertyTypes = [
      new PropertyType("All"),
      new PropertyType("Apartment & Unit"),
      new PropertyType("House"),
      new PropertyType("Townhouse"),
      new PropertyType("Villa"),
      new PropertyType("Land"),
      new PropertyType("Acreage"),
      new PropertyType("Rural"),
      new PropertyType("Block of units"),
      new PropertyType("Retirement Living")
    ];

    // Select 'All' by default
    this.propertyTypes[0].isSelected = true;
  }

  initialisePriceRangeValues() {
    this.priceRangeValues = [
      0,
      25,
      50,
      75,
      100,
      125,
      150,
      175,
      200,
      225,
      250,
      275,
      300,
      325,
      350,
      375,
      400,
      425,
      450,
      475,
      500,
      550,
      600,
      650,
      700,
      750,
      800,
      850,
      900,
      950,
      1000,
      1200,
      1400,
      1600,
      1800,
      2000,
      2250,
      2500,
      2750,
      3000,
      3500,
      4000,
      4500,
      5000,
      6000,
      7000,
      8000,
      9000,
      10000,
      12000
    ];
  }

  close() {
    this.modalService.dismiss({ success: false });
    this.searchService.currentSearch = new SearchItem();
  }

  search() {
    this.modalService.dismiss({ success: true });
  }
}
