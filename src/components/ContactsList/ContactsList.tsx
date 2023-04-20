import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material'

import { DEFAULT_ERROR_MESSAGE } from 'src/utils/consts'

import Search from 'src/components/Search'
import ContactCard from 'src/components/ContactCard'
import useGetContacts from 'src/hooks/useGetContacts'

const ContactsList = () => {
  const { data: allContacts, isLoading, error } = useGetContacts()

  return (
    <>
      <Search />

      {error ? (
        <>{error?.message || DEFAULT_ERROR_MESSAGE}</>
      ) : (
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
      )}
    </>
  )
}

export default ContactsList
