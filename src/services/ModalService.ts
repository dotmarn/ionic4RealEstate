import { ModalController } from "@ionic/angular";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  constructor(private modalCtrl: ModalController) {}

  async presentModal(page: any, onDismissCallback?: any) {
    const modal = await this.modalCtrl.create({
      component: page
    });

    if (onDismissCallback) {
      modal.onDidDismiss().then(data => {
        onDismissCallback(data);
      });
    }

    return await modal.present();
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }
}
