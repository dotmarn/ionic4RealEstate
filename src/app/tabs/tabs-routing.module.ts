import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../home/home.module").then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: "collections",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../collections/collections.module").then(
                m => m.CollectionsPageModule
              )
          }
        ]
      },
      {
        path: "notifications",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../notifications/notifications.module").then(
                m => m.NotificationsPageModule
              )
          }
        ]
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../profile/profile.module").then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
