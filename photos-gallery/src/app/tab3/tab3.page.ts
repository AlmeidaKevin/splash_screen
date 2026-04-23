import { Component } from '@angular/core';
import { PhotoService } from '../services/photo';
import { ModalController } from '@ionic/angular';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(
    public photoService: PhotoService,
    private modalCtrl: ModalController
  ) {}

  async openPhoto(photo: any) {
    const modal = await this.modalCtrl.create({
      component: PhotoModalComponent,
      componentProps: { photo }
    });

    await modal.present();
  }
}