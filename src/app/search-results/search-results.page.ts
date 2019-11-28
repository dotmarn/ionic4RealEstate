import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.page.html",
  styleUrls: ["./search-results.page.scss"]
})
export class SearchResultsPage implements OnInit {
  resultType: string = "list";

  constructor() {}

  ngOnInit() {}
}
