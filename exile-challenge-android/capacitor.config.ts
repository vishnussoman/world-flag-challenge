import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exilechallenge.app',
  appName: 'Exile Challenge',
  webDir: 'dist',
  bundledWebRuntime: false,
  backgroundColor: '#020617',
  server: {
    androidScheme: 'https',
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#020617',
    },
    ScreenOrientation: {
      orientation: 'portrait',
    },
  },
};

export default config;
