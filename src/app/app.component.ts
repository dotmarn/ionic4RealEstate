import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Randomizer } from "src/data/Helpers/Randomizer";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // var properties = [];

    // for (let i = 1; i <= 20; i++) {
    //   var pictureUrls = [];
    //   for (let j = 1; j <= 5; j++) {
    //     pictureUrls.push(
    //       "assets/images/properties/property" + i + "/image" + j + ".jpg"
    //     );
    //   }

    //   var property = {
    //     pictureUrls: pictureUrls,
    //     price: Math.ceil(Randomizer.random(100000, 5000000) / 10000) * 10000,
    //     unitNo: Randomizer.random(0, 1) == 1 ? Randomizer.random(1, 99) : 0,
    //     streetNo: Randomizer.random(1, 99),
    //     streetName: "",
    //     bedroomsCount: Randomizer.random(1, 5),
    //     bathroomsCount: Randomizer.random(1, 5),
    //     carSpacesCount: Randomizer.random(1, 5),
    //     areaSize: Randomizer.random(50, 200),
    //     coordinates: [{ lat: 0, lng: 0 }],
    //     summaryTitle: "",
    //     summary: ""
    //   };

    //   properties.push(property);
    // }

    // console.log(JSON.stringify(properties));
  }
}
