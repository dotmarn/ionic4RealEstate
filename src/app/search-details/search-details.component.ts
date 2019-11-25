import { Component, OnInit, Input } from "@angular/core";

import { SearchItem } from "src/data/SearchItem";

@Component({
  selector: "search-details",
  templateUrl: "./search-details.component.html",
  styleUrls: ["./search-details.component.scss"]
})
export class SearchDetailsComponent implements OnInit {
  @Input() searchItem: SearchItem;

  constructor() {}

  ngOnInit() {}
}
