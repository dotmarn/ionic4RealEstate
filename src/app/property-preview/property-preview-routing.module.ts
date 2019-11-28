import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PropertyPreviewComponent } from "./property-preview.component";

const routes: Routes = [
  {
    path: "",
    component: PropertyPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyPreviewComponentRoutingModule {}
