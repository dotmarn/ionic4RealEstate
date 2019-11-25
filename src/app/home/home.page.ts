import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ModalService } from "src/services/ModalService";

import { SearchPage } from "../search/search.page";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  isSearchHistory: boolean = true;

  constructor(private router: Router, private modalService: ModalService) {}

  ngOnInit() {}

  onSearchInFocus() {
    this.modalService.presentModal(SearchPage, (result: { data: any }) => {
      if (result.data) {
        this.router.navigate(["/search-results"]);
      }
    });
  }
}
