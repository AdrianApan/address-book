import dayjs from 'dayjs'
import { Dialog, DialogTitle, DialogContent, DialogActions, Input, Button } from '@mui/material/'
import { PersonOutlined, EmailOutlined, PhoneOutlined, CakeOutlined } from '@mui/icons-material'

import { Contact } from 'src/types/Contact'

import { StyledFormControl } from './EditContact.styles'
import useEditContactModal from './useEditContactModal'

interface Props {
  isModalVisible: boolean
  handleClose: () => void
  contactDetails: Contact
}

const EditContactModal = ({ isModalVisible, handleClose, contactDetails }: Props) => {
  const { id, name, email, phone, birthday } = contactDetails
  const { handleSubmit } = useEditContactModal(id, handleClose)

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={isModalVisible}
      maxWidth="sm"
      fullWidth
    >
      <form onSubmit={handleSubmit} noValidate>
        <DialogTitle id="dialog-title" sx={{ fontSize: 16, fontWeight: 700 }}>
          Edit contact #{id}
        </DialogTitle>
        <DialogContent dividers>
          <StyledFormControl fullWidth margin="normal">
            <Input
              placeholder="Name"
              id="name"
              defaultValue={name}
              disableUnderline
              startAdornment={<PersonOutlined />}
              inputProps={{
                'aria-label': 'name',
                name: 'name',
              }}
            />
          </StyledFormControl>
          <StyledFormControl fullWidth margin="normal">
            <Input
              placeholder="Email address"
              id="email"
              defaultValue={email}
              disableUnderline
              startAdornment={<EmailOutlined />}
              inputProps={{
                'aria-label': 'email',
                name: 'email',
              }}
            />
          </StyledFormControl>
          <StyledFormControl fullWidth margin="normal">
            <Input
              placeholder="Phone number"
              id="phone"
              defaultValue={phone}
              disableUnderline
              startAdornment={<PhoneOutlined />}
              inputProps={{
                'aria-label': 'phone',
                name: 'phone',
              }}
            />
          </StyledFormControl>
          <StyledFormControl fullWidth margin="normal">
            <Input
              placeholder="Date of birth (DD/MM/YYY)"
              id="dob"
              defaultValue={dayjs(birthday).format('DD MMM YYYY')}
              disableUnderline
              startAdornment={<CakeOutlined />}
              inputProps={{
                'aria-label': 'date of birth',
                name: 'dob',
              }}
            />
          </StyledFormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default EditContactModal
