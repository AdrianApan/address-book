import { Button } from '@mui/material'

import { Contact } from 'src/types/Contact'
import useGetContacts from 'src/hooks/useGetContacts'
import useAddContact from 'src/hooks/useAddContact'

const ContactsList = () => {
  const { data: allContacts, isLoading, error } = useGetContacts()
  const addContact = useAddContact()

  if (isLoading) {
    return <>Loading contacts...</>
  }

  if (error) {
    return <>{error?.message}</>
  }

  const contactData = { name: 'xyz' }

  return (
    <>
      {allContacts?.map(({ id, name }: Contact) => (
        <li key={id}>{name}</li>
      ))}

      <Button variant="contained" onClick={() => addContact.mutate({ data: contactData })}>
        ADD NEW
      </Button>
    </>
  )
}

export default ContactsList
