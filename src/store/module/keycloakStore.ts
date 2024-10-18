import jwtDecode from 'jwt-decode'
// @ts-expect-error
import type Keycloak from 'keycloak-js'
import { defineStore } from 'pinia'

export const useKeycloakStore = defineStore({
    id: 'keycloakStore',
    state: () => ({
        keycloak: null as Keycloak | null,
    }),
    actions: {
        async getUserProfile() {
            return await this.keycloak?.loadUserProfile()
        },
        logout() {
            this.keycloak?.logout()
        },
        getToken() {
            return this.keycloak?.token
        },
        getTokenParsed() {
            return this.keycloak?.tokenParsed
        },
        isLoggedIn() {
            return this.keycloak?.authenticated
        },
    }
})
