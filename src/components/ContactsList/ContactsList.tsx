import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material'

import { DEFAULT_ERROR_MESSAGE } from 'src/utils/consts'

import ContactCard from '../ContactCard'
import useGetContacts from 'src/hooks/useGetContacts'
import useAddContact from 'src/hooks/useAddContact'

const ContactsList = () => {
  const { data: allContacts, isLoading, error } = useGetContacts()
  const addContact = useAddContact()

  if (error) {
    return <>{error?.message || DEFAULT_ERROR_MESSAGE}</>
  }

  const contactData = { name: 'xyz' }

  return (
    <>
      {/* <Button variant="contained" onClick={() => addContact.mutate({ data: {} })}>
        ADD NEW
      </Button> */}
      <Grid container spacing={2}>
        {isLoading
          ? [...Array(9)].map((_, i) => (
              <Grid key={i} item xs={12} lg={4}>
                <Skeleton variant="rectangular" width="100%" height={200} />
              </Grid>
            ))
          : allContacts?.map((contact) => (
              <Grid key={contact.id} item xs={12} lg={4}>
                <ContactCard details={contact} />
              </Grid>
            ))}
      </Grid>
    </>
  )
}

export default ContactsList
