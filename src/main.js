import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import posthog from 'posthog-js'

createApp(App).mount('#app')

posthog.init('phc_hfRRX7ZfDV4Tv8ln8GCAYE5ap3roF4UxraTBJLW2wJF', {
    api_host: 'https://eu.posthog.com', //
    person_profiles: 'always' //
})