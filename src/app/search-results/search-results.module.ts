import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchResultsPageRoutingModule } from "./search-results-routing.module";

import { SearchResultsPage } from "./search-results.page";

import { SearchResultsListComponentModule } from "../search-results-list/search-results-list.module";
import { SearchResultsMapComponentModule } from "../search-results-map/search-results-map.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsPageRoutingModule,
    SearchResultsListComponentModule,
    SearchResultsMapComponentModule
  ],
  declarations: [SearchResultsPage]
})
export class SearchResultsPageModule {}
