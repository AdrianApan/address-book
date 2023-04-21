import { Box, Grid, Alert, AlertTitle, Skeleton } from '@mui/material'

import { DEFAULT_ERROR_MESSAGE } from 'src/utils/consts'

import Search from 'src/components/Search'
import { ContactCard } from 'src/components/Contacts'
import useGetContacts from 'src/hooks/useGetContacts'

const ContactsList = () => {
  const { data: allContacts, isLoading, error } = useGetContacts()

  return (
    <>
      <Search />

      {error && (
        <Alert severity="error" data-cy="error-banner">
          <AlertTitle>Error</AlertTitle>
          {error?.message || DEFAULT_ERROR_MESSAGE}
        </Alert>
      )}

      {!isLoading && !error && !allContacts?.length && (
        <Alert severity="info" data-cy="no-results-banner">
          <AlertTitle>No results</AlertTitle>
          There are no contacts in your address book.
        </Alert>
      )}

      {!error && (
        <Grid container spacing={2} data-cy="contacts-grid">
          {isLoading ? (
            <Box>
              {[...Array(9)].map((_, i) => (
                <Grid key={i} item xs={12} lg={4}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                </Grid>
              ))}
            </Box>
          ) : (
            allContacts?.map((contact) => (
              <Grid key={contact.id} item xs={12} lg={4} data-cy="contact-card">
                <ContactCard details={contact} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </>
  )
}

export default ContactsList
