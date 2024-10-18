import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
// @ts-expect-error
import Keycloak, { KeycloakInitOptions } from 'keycloak-js'
import { keycloakConfig } from '@/plugins/keycloak/keycloakConfig'
import { useKeycloakStore } from '@/store/module/keycloakStore'

const app = createApp(App)

app.use(router)
app.use(createPinia())

let keycloak = new Keycloak(keycloakConfig)
const keycloakStore = useKeycloakStore()
keycloakStore.$state.keycloak = keycloak

let initOptions: KeycloakInitOptions = {
    onLoad: 'login-required',
    checkLoginIframe: false,
}

await keycloak
    .init(initOptions)
    .then(async (auth: any) => {
        if (!auth) {
            keycloak.login()
        }
    })
    .catch((error: any) => console.log(error))

app.mount('#app')
