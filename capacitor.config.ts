import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.treino.duassemanas',
  appName: 'Treino 3 Meses',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_treino',
      iconColor: '#F28C28'
    }
  }
};

export default config;
