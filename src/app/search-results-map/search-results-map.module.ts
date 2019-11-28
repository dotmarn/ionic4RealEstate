import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchResultsMapComponentRoutingModule } from "./search-results-map-routing.module";

import { SearchResultsMapComponent } from "./search-results-map.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsMapComponentRoutingModule
  ],
  declarations: [SearchResultsMapComponent],
  exports: [SearchResultsMapComponent]
})
export class SearchResultsMapComponentModule {}
