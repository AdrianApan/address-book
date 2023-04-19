import axios from 'axios'

import { Contact } from 'src/types/Contact'
import { API_BASE_URL } from 'src/utils/consts'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export const getContacts = async () => {
  const response = await apiClient.get<Contact[]>('/api/v1/contacts')
  return response.data
}

export const addContact = async (data: Partial<Contact>) => {
  const response = await apiClient.post<Contact[]>('/api/v1/contacts', { data })
  return response.data
}

export const editContact = async (id: Contact['id'], data: Partial<Contact>) => {
  const response = await apiClient.put<Contact[]>(`/api/v1/contacts/${id}`, { data })
  return response.data
}

export const deleteContact = async (id: Contact['id']) => {
  const response = await apiClient.delete<Contact[]>(`/api/v1/contacts/${id}`)
  return response.data
}
