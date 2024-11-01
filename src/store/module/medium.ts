import { mediumContent } from "@/api/medium"

export const storeMedium = defineStore({
    id: 'medium',
    state: () => ({
        // @ts-ignore
        content: localStorage.getItem('medium') != null ? JSON.parse(localStorage.getItem('medium')) : null
    }),
    actions: {
        async getContent() {
            const data = await mediumContent();
            if (this.content == null) {
                localStorage.setItem('medium', JSON.stringify(data))
                return data
            }
        }
    }
})