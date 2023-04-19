import axios from 'axios'

import { API_BASE_URL } from 'src/utils/consts'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
