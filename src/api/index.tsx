import axios from 'axios'

import { ContactID, ContactData, ContactDataResponse } from 'src/types/Contacts'
import { API_BASE_URL } from 'src/utils/consts'

export const getContacts = (): Promise<ContactDataResponse> =>
  axios.get(`${API_BASE_URL}/api/v1/contacts`)

export const createContact = (data: ContactData): Promise<ContactDataResponse> =>
  axios.post(`${API_BASE_URL}/api/v1/contacts`, data)

export const editContact = (id: ContactID, data: ContactData): Promise<ContactDataResponse> =>
  axios.put(`${API_BASE_URL}/api/v1/contacts/${id}`, data)

export const deleteContact = (id: ContactID): Promise<ContactDataResponse> =>
  axios.delete(`${API_BASE_URL}/api/v1/contacts/${id}`)
