import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchResultsMapComponent } from "./search-results-map.component";

const routes: Routes = [
  {
    path: "",
    component: SearchResultsMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsMapComponentRoutingModule {}
