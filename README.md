
# 📱 Splash Screen e Ícono Personalizado en Ionic

Este proyecto consiste en la implementación de un **ícono personalizado de aplicación** y un **Splash Screen** en una app de galería de fotos desarrollada con **Ionic + Angular (NgModule)** utilizando Capacitor.

---

## 🎯 Objetivo

Configurar correctamente:

* Un **ícono personalizado** para la aplicación
* Un **Splash Screen (pantalla de inicio)** moderno compatible con Android

---

## 🛠️ Tecnologías utilizadas

* Ionic Framework
* Angular (NgModule)
* Capacitor
* Android

---

## 📥 Instalación del proyecto

1. Descargar el repositorio desde GitHub:
   👉 [https://github.com/AlmeidaKevin/photos-gallery.git](https://github.com/AlmeidaKevin/photos-gallery.git)

2. Descomprimir el archivo `.zip`

3. Abrir una terminal en la carpeta del proyecto y ejecutar:

```bash
npm install
```

---

## 🎨 Recursos utilizados

Se añadieron imágenes personalizadas en la carpeta:

```id="s41wgl"
resources/
 ├── icon.png      (1024x1024)
 └── splash.png    (2732x2732)
```
🖼️ **Inagenes:**


<p align="center">[ICON.PNG Y SPLASH.PNG]</p>


<p align="center">
  
  <img width="45%" height="500" src="https://github.com/user-attachments/assets/532bf206-45a9-423b-9567-0e185408e1fc" />
  <img width="45%" height="500" src="https://github.com/user-attachments/assets/092fb705-14b3-41f0-803b-ff53f56500b8" />

</p>


## ⚙️ Generación automática de assets

```bash
npx capacitor-assets generate
```

Luego:

```bash
npx cap sync
```

---

## 📱 Configuración del Splash Screen

Debido a cambios en Android 12+, fue necesario configurar el splash screen de forma nativa en:

```
android/app/src/main/res/values/styles.xml
```

### ✅ Configuración aplicada

```xml
<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
    <item name="windowSplashScreenBackground">#ffffff</item>
    <item name="windowSplashScreenAnimatedIcon">@drawable/splash</item>
    <item name="postSplashScreenTheme">@style/AppTheme.NoActionBar</item>
</style>
```
📷 **Captura de pantalla:**


<p align="center">[LA APLICACION MOVIL CON EL ICON Y EL SPLASH SCREEN]</p>


<p align="center">
  
  <img width="720" height="304" src="https://github.com/user-attachments/assets/114ab92b-483b-49a2-ae66-a3935a2d55e1" />
  
</p>

<p align="center">
  
  
  <img width="45%" height="800" src="https://github.com/user-attachments/assets/cc4b4651-9f63-4ec9-88de-6235f7c991f3" />
  <img width="45%" height="800" src="https://github.com/user-attachments/assets/723c65ea-34b8-451e-8acb-d4068532f583" />


</p>

## ⚠️ Nota importante

A partir de Android 12, el sistema usa la API nativa de Splash Screen, por lo que fue necesario modificar `styles.xml` para que funcione correctamente.

---

## 🚀 Ejecución del proyecto

```bash
ionic build
npx cap copy android
npx cap run android
```

---

## 📌 Resultado

* ✔️ Ícono personalizado aplicado correctamente
* ✔️ Splash Screen funcional en Android
* ✔️ Compatible con Android moderno

---

## 🧠 Conclusión

La implementación del Splash Screen en Ionic requiere:

* Configuración inicial del proyecto
* Generación de assets
* Sincronización con Capacitor
* Ajustes nativos en Android
