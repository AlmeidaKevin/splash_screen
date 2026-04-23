import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-modal',
  standalone: true, // 🔥 CLAVE
  imports: [IonicModule, CommonModule],
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss'],
})
export class PhotoModalComponent {

  @Input() photo: any;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
}