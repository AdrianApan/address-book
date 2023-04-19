import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { DEFAULT_ERROR_MESSAGE } from 'src/utils/consts'

import ContactCard from '../ContactCard'
import useGetContacts from 'src/hooks/useGetContacts'
import useAddContact from 'src/hooks/useAddContact'

const ContactsList = () => {
  const { data: allContacts, isLoading, error } = useGetContacts()
  const addContact = useAddContact()

  if (isLoading) {
    return <>Loading contacts...</>
  }

  if (error) {
    return <>{error?.message || DEFAULT_ERROR_MESSAGE}</>
  }

  const contactData = { name: 'xyz' }

  return (
    <Grid container spacing={2}>
      {allContacts?.map((contact) => (
        <Grid key={contact.id} item xs={12} lg={4}>
          <ContactCard details={contact} />
        </Grid>
      ))}

      {/* <Button variant="contained" onClick={() => addContact.mutate({ data: contactData })}>
        ADD NEW
      </Button> */}
    </Grid>
  )
}

export default ContactsList
