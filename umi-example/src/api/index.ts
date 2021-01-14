import axios from 'axios'

export default async (url: string, data?: any) => {
    const result = await axios.post(url, data)
    return result.data
}
