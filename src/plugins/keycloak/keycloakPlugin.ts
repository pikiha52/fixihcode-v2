// @ts-ignore
import Keycloak, { KeycloakInitOptions } from 'keycloak-js'

let initOptions: KeycloakInitOptions = {
    onLoad: 'login-required',
    checkLoginIframe: false,
    redirectUri: `${import.meta.env.VITE_APP_URL}/dashboard`,
}

const KeycloakPlugin = {
    async install(app: any, keycloak: Keycloak) {
        keycloak
            .init(initOptions)
            .then((auth: any) => {
                if (!auth) {
                    keycloak.login()
                } else {
                    app.config.globalProperties.$keycloak = keycloak
                }
            })
            .catch((error: any) => {
                console.error('Keycloak initialization error', error)
            })

        app.provide('keycloak', keycloak)
    },
}

export default KeycloakPlugin
