import dayjs from 'dayjs'
import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getContacts } from 'src/services/contacts'
import { Contact } from 'src/types/Contact'

const useGetContacts = () => {
  const { data, isLoading, error } = useQuery<Contact[], AxiosError>({
    queryKey: ['contacts'],
    queryFn: getContacts,
    // onSuccess: (data) => {
    //   data?.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1))
    // },
  })

  return {
    data,
    isLoading,
    error,
  }
}

export default useGetContacts
