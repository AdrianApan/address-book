export type ContactID = string

export interface ContactData {
  name?: string
  email?: string
  phone?: string
  birthday?: string
  createdAt?: string
}

export interface ContactDataResponse {
  data: Required<ContactData>
}
