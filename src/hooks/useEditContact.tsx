import { useQueryClient, useMutation } from '@tanstack/react-query'

import { editContact } from 'src/services/contacts'
import { Contact } from 'src/types/Contact'

const useEditContact = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: Contact['id']; data: Partial<Contact> }) =>
      editContact(id, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })
}

export default useEditContact
