import dayjs from 'dayjs'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import CircularProgress from '@mui/material/CircularProgress'

import useAddContact from 'src/hooks/useAddContact'

const AddContact = () => {
  const addContact = useAddContact()
  const { isLoading } = addContact

  return (
    <Button
      variant="outlined"
      onClick={() => addContact.mutate({ data: { createdAt: dayjs().toString() } })}
      startIcon={isLoading ? <CircularProgress size={16} color="info" /> : <AddIcon />}
      disabled={isLoading}
    >
      Add
    </Button>
  )
}

export default AddContact
