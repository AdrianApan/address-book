import { useQueryClient, useMutation } from '@tanstack/react-query'

import { deleteContact } from 'src/services/contacts'
import { Contact } from 'src/types/Contact'

const useDeleteContact = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id }: { id: Contact['id'] }) => deleteContact(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })
}

export default useDeleteContact
