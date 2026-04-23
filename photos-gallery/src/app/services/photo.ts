import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE = 'photos';

  constructor(private alertController: AlertController) {}

  // 📸 Tomar foto
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      saveToGallery: true, // ✅ guardar en galería del teléfono
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    await Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  // 💾 Guardar foto con apellido
  private async savePicture(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // 👇 CAMBIA "Almeida" POR TU APELLIDO
    const fileName = `Almeida_${Date.now()}.jpeg`;

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }

  // 🔄 Convertir imagen
  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  // 🔔 ALERTA
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Hola 👋 este es un mensaje predeterminado',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}