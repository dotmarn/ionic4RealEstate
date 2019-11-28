import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchResultsListComponent } from "./search-results-list.component";

const routes: Routes = [
  {
    path: "",
    component: SearchResultsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsListComponentRoutingModule {}
