import axios from 'axios'
import WebApp from '@twa-dev/sdk'

const api = axios.create({
  baseURL: 'https://comentra.net:8888/api/v1/',
})

export const fetchProjects = async (category: string) => {
  WebApp.ready()
  const telegramInitData = WebApp.initData

  if (!telegramInitData) {
    throw new Error('initData отсутствует')
  }

  const encodedInitData = encodeURIComponent(telegramInitData)

  try {
    const response = await api.get(
      `projects?category=${category}&initData=${encodedInitData}`,
    )

    console.log('[fetchProjects] Data fetched:', response.data)
    return response.data
  } catch (error) {
    console.error('[fetchProjects] Error:', error)

    if (axios.isAxiosError(error)) {
      console.error('[fetchProjects] Axios Response:', error.response)
    }

    throw error
  }
}
