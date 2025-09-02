<div align="center">

# 🍳 FryFresh - Yemek Tarifleri Uygulaması

**React Native, Firebase ve Tailwind CSS ile Geliştirilmiş Modern Yemek Tarifleri Mobil Uygulaması**

[![React Native](https://img.shields.io/badge/React_Native-0.74.5-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51.0.28-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.13.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[📱 Demo](#-demo) • [📋 Özellikler](#-özellikler) • [🛠️ Teknolojiler](#️-teknolojiler) • [🚀 Kurulum](#-kurulum) 

</div>

---

## 📖 Hakkında

**FryFresh**, modern mobil teknolojiler kullanılarak geliştirilmiş kapsamlı bir yemek tarifleri uygulamasıdır. React Native, Firebase ve Tailwind CSS gibi güncel teknolojilerle oluşturulmuş olup, kullanıcılara binlerce yemek tarifi, kategorize edilmiş içerik ve interaktif özellikler sunmaktadır.

### 🎯 Projenin Amacı

- 🍽️ **Yemek Tarifleri** - Geniş yemek tarifleri koleksiyonu
- 📱 **Mobil Deneyim** - iOS ve Android uyumlu native uygulama
- 🔥 **Firebase Backend** - Gerçek zamanlı veri senkronizasyonu
- 🎨 **Modern UI/UX** - Tailwind CSS ile responsive tasarım
- ⚡ **Hızlı Performans** - Optimize edilmiş görsel yükleme
- 📚 **Kategorize İçerik** - Düzenli ve arama yapılabilir tarifler

---

## 📱 Demo

**🔗 [Canlı Demo](https://your-demo-url.com)**

Uygulama şu anda geliştirme aşamasındadır. Demo linki yakında eklenecektir.

---

## 🚀 Kurulum

### Gereksinimler

- **Node.js** (v16 veya üzeri)
- **npm** veya **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (Android geliştirme için)
- **Xcode** (iOS geliştirme için - sadece macOS)
- **Firebase** hesabı

### Adım Adım Kurulum

1. **Depoyu klonlayın**
   ```bash
   git clone https://github.com/your-username/fryfresh.git
   cd fryfresh
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Firebase yapılandırması**
   - Firebase Console'da yeni bir proje oluşturun
   - `App.js` dosyasındaki Firebase config'i güncelleyin
   - Firestore Database'i etkinleştirin

4. **Uygulamayı başlatın**
   ```bash
   # Expo ile çalıştır
   npx expo start
   
   # Android'de çalıştır
   npx expo run:android
   
   # iOS'ta çalıştır
   npx expo run:ios
   
   # Web'de çalıştır
   npx expo start --web
   ```

### Build Komutları

```bash
# Development
npm start

# Android build
npm run android

# iOS build
npm run ios

# Web build
npm run web
```

---

## 📋 Geliştirdiğim Özellikler

### 🏠 Ana Sayfa (HomeScreen.js)
- [x] **Kategori Sistemi** - Firebase'den dinamik kategori çekme
- [x] **Tarif Listesi** - Kategorize edilmiş yemek tarifleri
- [x] **Arama Fonksiyonu** - Gerçek zamanlı tarif arama
- [x] **Responsive Tasarım** - Tüm ekran boyutlarına uyumlu
- [x] **Loading States** - Kullanıcı deneyimi için loading bileşenleri

### 🍽️ Tarif Detay Sayfası (RecipeDetailScreen.js)
- [x] **Detaylı Tarif Görüntüleme** - Malzemeler ve yapılış adımları
- [x] **YouTube Entegrasyonu** - Video tarif desteği
- [x] **Favori Sistemi** - Tarifleri favorilere ekleme
- [x] **Görsel Optimizasyonu** - Cached image sistemi
- [x] **Animasyonlar** - Smooth geçiş efektleri

### 🎨 UI/UX Geliştirmeleri
- [x] **Tailwind CSS** - Utility-first styling
- [x] **Poppins Font Family** - Modern tipografi
- [x] **Responsive Design** - Mobil-first yaklaşım
- [x] **Smooth Animations** - React Native Reanimated
- [x] **Loading Components** - Kullanıcı dostu loading states

### 🔧 Teknik Geliştirmeler
- [x] **Firebase Integration** - Firestore database entegrasyonu
- [x] **Image Caching** - AsyncStorage ile görsel önbellekleme
- [x] **Navigation System** - React Navigation ile sayfa geçişleri
- [x] **State Management** - React hooks ile durum yönetimi
- [x] **Performance Optimization** - Optimize edilmiş görsel yükleme

### 📱 Mobil Özellikler
- [x] **Cross-Platform** - iOS ve Android uyumlu
- [x] **Native Performance** - React Native ile native performans
- [x] **Offline Support** - Cached images ile offline görüntüleme
- [x] **Touch Interactions** - Mobil dokunmatik etkileşimler
- [x] **Status Bar Management** - Expo Status Bar entegrasyonu

---

## 🛠️ Teknolojiler

### Frontend Framework
- **React Native** `0.74.5` - Cross-platform mobil uygulama
- **Expo** `51.0.28` - Geliştirme ortamı ve build sistemi
- **React Navigation** `6.x` - Navigasyon sistemi

### Backend & Database
- **Firebase** `10.13.1` - Backend-as-a-Service
  - **Firestore** - NoSQL database
  - **Firebase App** - Core Firebase services

### Styling & UI
- **Tailwind CSS** `3.3.2` - Utility-first CSS framework
- **NativeWind** `2.0.11` - Tailwind CSS for React Native
- **React Native Vector Icons** `10.1.0` - Icon library

### State Management & Storage
- **AsyncStorage** `1.23.1` - Local data storage
- **React Hooks** - State management

### Media & Animation
- **React Native Reanimated** `3.10.1` - Advanced animations
- **Lottie React Native** `6.7.2` - Animation library
- **React Native YouTube Iframe** `2.3.0` - YouTube integration

### Development Tools
- **Expo Font** `12.0.10` - Custom font loading
- **Expo Splash Screen** `0.27.5` - Splash screen management
- **React Native Responsive Screen** `1.4.2` - Responsive design

---

## 📁 Proje Yapısı

```
fryfresh/
├── src/
│   ├── components/        # Yeniden kullanılabilir bileşenler
│   │   ├── Categories/   # Kategori bileşenleri
│   │   │   └── Categories.js
│   │   ├── Loading/      # Loading bileşenleri
│   │   │   └── Loading.js
│   │   ├── RecipeCard/   # Tarif kartı bileşenleri
│   │   │   └── RecipeCard.js
│   │   └── Recipes/      # Tarif listesi bileşenleri
│   │       └── Recipes.js
│   ├── screens/          # Sayfa bileşenleri
│   │   ├── HomeScreen/   # Ana sayfa
│   │   │   └── HomeScreen.js
│   │   ├── WelcomeScreen/ # Hoş geldin sayfası
│   │   │   └── WelcomeScreen.js
│   │   ├── RecipeDetailScreen/ # Tarif detay sayfası
│   │   │   └── RecipeDetailScreen.js
│   │   └── FavoriteScreen/ # Favoriler sayfası
│   │       └── FavoriteScreen.js
│   ├── navigation/       # Navigasyon yapılandırması
│   │   └── index.js
│   ├── constants/        # Sabitler ve veriler
│   │   └── index.js
│   ├── helpers/          # Yardımcı fonksiyonlar
│   │   └── image.js      # Görsel önbellekleme
│   └── assets/           # Statik varlıklar
│       ├── fonts/        # Poppins font ailesi
│       ├── images/       # Resim dosyaları
│       ├── icon.png      # Uygulama ikonu
│       └── splash.png    # Splash screen
├── App.js                # Ana uygulama bileşeni
├── app.json             # Expo yapılandırması
├── babel.config.js      # Babel yapılandırması
├── tailwind.config.js   # Tailwind CSS yapılandırması
└── package.json         # Proje bağımlılıkları
```





---

## 🔧 Geliştirme

### Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm start

# Android'de çalıştır
npm run android

# iOS'ta çalıştır
npm run ios

# Web'de çalıştır
npm run web
```

### Firebase Yapılandırması

1. Firebase Console'da proje oluşturun
2. Firestore Database'i etkinleştirin
3. `App.js` dosyasındaki config'i güncelleyin:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

### Image Caching Sistemi

Uygulama, görselleri AsyncStorage'da önbelleğe alarak performansı artırır:

```javascript
// helpers/image.js
export const CachedImage = (props) => {
  // Görsel önbellekleme mantığı
  // Base64 dönüşümü ve AsyncStorage
};
```

---

## 🚀 Deployment

### Expo Build

```bash
# EAS Build kurulumu
npm install -g @expo/cli
npx expo install @expo/cli

# Build oluştur
eas build --platform android
eas build --platform ios
eas build --platform all
```

### APK Build

```bash
# Android APK
eas build --platform android --profile preview

# iOS Build
eas build --platform ios --profile preview
```

---

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

### Geliştirme Kuralları
- React Native best practices'leri takip edin
- Responsive tasarım prensiplerini uygulayın
- Performance optimizasyonlarını göz önünde bulundurun
- Firebase güvenlik kurallarına uyun

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Bu projeyi geliştiren: Mehmet Çelebi Gezer**

Bu yemek tarifleri uygulaması, modern mobil teknolojiler kullanılarak geliştirilmiştir. React Native, Firebase ve Tailwind CSS gibi güncel teknolojilerle oluşturulmuş olup, kullanıcı dostu arayüzü ve güçlü backend entegrasyonu ile profesyonel bir mobil uygulama deneyimi sunmaktadır.

### 🎯 Proje Detayları
- **Geliştirme Süresi:** [X] hafta/gün
- **Kullanılan Teknolojiler:** React Native, Firebase, Tailwind CSS, Expo
- **Özellikler:** Tarif sistemi, Kategori yönetimi, Firebase entegrasyonu, Image caching
- **Platform:** iOS, Android, Web

---

## 🙏 Teşekkürler

- [React Native](https://reactnative.dev/) ekibine
- [Expo](https://expo.dev/) ekibine
- [Firebase](https://firebase.google.com/) ekibine
- [Tailwind CSS](https://tailwindcss.com/) ekibine
- [TheMealDB](https://www.themealdb.com/) API ekibine
- Tüm açık kaynak katkıda bulunanlara

---

## 📞 İletişim

**Proje Hakkında Sorularınız İçin:**

- 📧 **E-posta:** [gezermcelebi@gmail.com](mailto:gezermcelebi@gmail.com)
- 💼 **LinkedIn:** [Mehmet Çelebi Gezer](https://www.linkedin.com/in/mehmet-%C3%A7elebi-gezer-605a38217/)
- 🐙 **GitHub:** [@gezerm85](https://github.com/gezerm85)
---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by **Mehmet Çelebi Gezer**

*Modern mobil teknolojiler ile geliştirilmiş profesyonel yemek tarifleri uygulaması*

</div>
