import { createApp } from 'vue'
import App from './App.vue'

import { registerMicroApps, start } from 'qiankun';

createApp(App).mount('#app')

registerMicroApps(
  [
    {
      name: 'react',
      entry: '//localhost:3002',
      container: '#subapp-viewport',
      activeRule: '/react',
    },
    {
      name: 'vue',
      entry: '//localhost:3001',
      container: '#subapp-viewport',
      activeRule: '/vue',
    },
  ]
);

start()
