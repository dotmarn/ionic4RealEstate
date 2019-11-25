import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  isSearchHistory: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSearchInFocus() {
    this.router.navigate(["/search"]);
  }
}
