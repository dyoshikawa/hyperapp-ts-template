import axiosBase, { AxiosInstance, AxiosResponse } from 'axios'
import { apiUrl } from '~/config'

export interface Api {
  fetchOthers(path: string): Promise<any | string>
}

export class ApiAxios implements Api {
  axios: AxiosInstance

  constructor() {
    this.axios = axiosBase.create({
      baseURL: apiUrl,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
        'Content-Type': 'application/json',
      },
    })
  }

  async fetchOthers(path: string): Promise<any | string> {
    const response: AxiosResponse<any> = await this.axios
      .get(path)
      .catch((error: string) => {
        return Promise.reject(error)
      })
    return Promise.resolve(response.data)
  }
}
