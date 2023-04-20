import dayjs from 'dayjs'
import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getContacts } from 'src/services/contacts'
import { Contact } from 'src/types/Contact'

const useGetContacts = (search = '') => {
  const { data, isLoading, error, refetch } = useQuery<Contact[], AxiosError>({
    queryKey: ['contacts'],
    queryFn: () => getContacts(search),
  })

  return {
    data: data?.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1)),
    isLoading,
    error,
    refetch,
  }
}

export default useGetContacts
