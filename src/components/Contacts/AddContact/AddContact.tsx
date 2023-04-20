import dayjs from 'dayjs'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import useAddContact from 'src/hooks/useAddContact'

const AddContact = () => {
  const addContact = useAddContact()

  return (
    <Button
      variant="outlined"
      onClick={() => addContact.mutate({ data: { createdAt: dayjs().toString() } })}
      startIcon={<AddIcon />}
    >
      Add
    </Button>
  )
}

export default AddContact
