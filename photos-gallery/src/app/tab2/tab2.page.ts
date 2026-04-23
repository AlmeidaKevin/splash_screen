import { Component } from '@angular/core';
import { PhotoService } from '../services/photo';
import { ModalController } from '@ionic/angular';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(
    public photoService: PhotoService,
    private modalCtrl: ModalController
  ) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async openPhoto(photo: any) {
    const modal = await this.modalCtrl.create({
      component: PhotoModalComponent,
      componentProps: { photo }
    });

    await modal.present();
  }
}