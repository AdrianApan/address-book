import { useQueryClient, useMutation } from '@tanstack/react-query'

import { addContact } from 'src/services/contacts'
import { Contact } from 'src/types/Contact'

const useAddContact = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data }: { data: Partial<Contact> }) => addContact(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })
}

export default useAddContact
