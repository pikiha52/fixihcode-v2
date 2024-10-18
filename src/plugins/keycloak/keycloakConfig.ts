// @ts-expect-error
import { KeycloakConfig } from 'keycloak-js'

export const keycloakConfig: KeycloakConfig = {
    realm: import.meta.env.VITE_KEYCLOAK_REALM !== undefined ? import.meta.env.VITE_KEYCLOAK_REALM : 'realm',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID !== undefined ? import.meta.env.VITE_KEYCLOAK_CLIENTID : 'clientid',
    url: import.meta.env.VITE_KEYCLOAK_URL !== undefined ? import.meta.env.VITE_KEYCLOAK_URL : 'url',
}
