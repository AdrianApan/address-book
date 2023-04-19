import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import useGetContacts from 'src/hooks/useGetContacts'
import useAddContact from 'src/hooks/useAddContact'
import ContactCard from '../ContactCard'

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
