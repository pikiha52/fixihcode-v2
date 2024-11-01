import axios from "axios"

export interface mediumData {
    date: string
    description: string
    image: string
    link: string
    tags: string[]
    title: string
}

export async function mediumContent(): Promise<mediumData[]> {
    const request = await axios.get('https://mediumpostsapi.vercel.app/api/fikihalan')
    if (request.status == 200) {
        return request.data.dataMedium
    }

    return []
}