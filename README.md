# Laboratorio 1 - Estructuras de Navegación Complejas
TPA-4001

## Descripción
App en React Native (Expo) con navegación anidada usando React Navigation:
- **Drawer** (menú lateral) como contenedor principal
- **Bottom Tabs** dentro del Drawer
- **Stack** dentro de un Tab, para navegar entre lista y detalle

## Estructura
\\\
App.js
src/
  navigation/
    HomeTabs.js       -> Bottom Tabs
    ProductsStack.js  -> Stack (Lista -> Detalle)
  screens/
    ListScreen.js
    DetailScreen.js
    FavoritesScreen.js
\\\

## Cómo correrlo
\\\
npm install
npx expo start
\\\
Escanear el QR con Expo Go o presionar \\ para abrir en el emulador de Android.
