import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";

import { SearchHistoryComponentModule } from "../search-history/search-history.module";
import { SavedSearchesComponentModule } from "../saved-searches/saved-searches.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchHistoryComponentModule,
    SavedSearchesComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
