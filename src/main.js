import { createApp } from 'vue'
import './styles/generic/reset.css'
import './styles/elements/base.css'
import './styles/settings/fonts.css'
import './styles/settings/colors.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
