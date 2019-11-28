import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ModalService } from "src/services/ModalService";
import { SearchService } from "src/services/SearchService";

import { SearchPage } from "../search/search.page";
import { FiltersPage } from "../filters/filters.page";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  isSearchHistory: boolean = true;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private searchService: SearchService
  ) {}

  ngOnInit() {}

  onSearchInFocus() {
    // this.modalService.presentModal(SearchPage, (searchResult: any) => {
    //   if (searchResult.data.success) {
    // this.modalService.presentModal(FiltersPage, (filterResult: any) => {
    //   if (filterResult.data.success) {
        this.router.navigate(["/search-results"]);
    //   }
    // });
    //   }
    // });
  }
}
