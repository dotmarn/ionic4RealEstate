import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SavedSearchesComponentRoutingModule } from "./saved-searches-routing.module";

import { SavedSearchesComponent } from "./saved-searches.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedSearchesComponentRoutingModule
  ],
  declarations: [SavedSearchesComponent],
  exports: [SavedSearchesComponent]
})
export class SavedSearchesComponentModule {}
