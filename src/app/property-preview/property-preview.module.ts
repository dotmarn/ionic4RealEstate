import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PropertyPreviewComponentRoutingModule } from "./property-preview-routing.module";

import { PropertyPreviewComponent } from "./property-preview.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyPreviewComponentRoutingModule
  ],
  declarations: [PropertyPreviewComponent]
})
export class PropertyPreviewComponentModule {}
