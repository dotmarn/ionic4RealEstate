import { Component, OnInit } from "@angular/core";

import { SearchService } from "src/services/SearchService";

@Component({
  selector: "search-history",
  templateUrl: "./search-history.component.html",
  styleUrls: ["./search-history.component.scss"]
})
export class SearchHistoryComponent implements OnInit {
  constructor(public searchService: SearchService) {}

  ngOnInit() {}
}
