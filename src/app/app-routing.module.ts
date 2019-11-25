import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "collections",
    loadChildren: () =>
      import("./collections/collections.module").then(
        m => m.CollectionsPageModule
      )
  },
  {
    path: "notifications",
    loadChildren: () =>
      import("./notifications/notifications.module").then(
        m => m.NotificationsPageModule
      )
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then(m => m.ProfilePageModule)
  },
  {
    path: "search",
    loadChildren: () =>
      import("./search/search.module").then(m => m.SearchPageModule)
  },
  {
    path: "filters",
    loadChildren: () =>
      import("./filters/filters.module").then(m => m.FiltersPageModule)
  },
  {
    path: "search-results",
    loadChildren: () =>
      import("./search-results/search-results.module").then(
        m => m.SearchResultsPageModule
      )
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
