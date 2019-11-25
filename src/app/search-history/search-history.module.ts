import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchHistoryPageRoutingModule } from "./search-history-routing.module";

import { SearchHistoryComponent } from "./search-history.component";

import { SearchDetailsComponentModule } from "../search-details/search-details.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchHistoryPageRoutingModule,
    SearchDetailsComponentModule
  ],
  declarations: [SearchHistoryComponent],
  exports: [SearchHistoryComponent]
})
export class SearchHistoryComponentModule {}
