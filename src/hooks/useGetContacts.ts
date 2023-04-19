import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getContacts } from 'src/services/contacts'
import { Contact } from 'src/types/Contact'

const useGetContacts = () => {
  const { data, isLoading, error } = useQuery<Contact[], AxiosError>({
    queryKey: ['contacts'],
    queryFn: getContacts,
  })

  return {
    data,
    isLoading,
    error,
  }
}

export default useGetContacts
