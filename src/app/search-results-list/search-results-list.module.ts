import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchResultsListComponentRoutingModule } from "./search-results-list-routing.module";

import { SearchResultsListComponent } from "./search-results-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsListComponentRoutingModule
  ],
  declarations: [SearchResultsListComponent],
  exports: [SearchResultsListComponent]
})
export class SearchResultsListComponentModule {}
