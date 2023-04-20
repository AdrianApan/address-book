import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CircularProgress from '@mui/material/CircularProgress'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'

import { Contact } from 'src/types/Contact'
import { EMPTY_PLACEHOLDER } from 'src/utils/consts'

import { CardHeader, StyledAvatar } from './ContactCard.styles'
import { EditContactModal } from 'src/components/Contacts'
import useDeleteContact from 'src/hooks/useDeleteContact'
import useContactCard from './useContactCard'

const ContactCard = ({ details }: { details: Contact }) => {
  const { id, name, avatar, email, phone, birthday, createdAt } = details
  const deleteContact = useDeleteContact()
  const { isLoading } = deleteContact
  const { isModalVisible, setIsModalVisible, handleClose } = useContactCard()

  return (
    <>
      <Card variant="outlined" sx={{ padding: 2 }}>
        <CardContent sx={{ pr: 2 }}>
          <CardHeader>
            <StyledAvatar alt={name} src={avatar} />
            <Box>
              <Typography sx={{ fontSize: 12, mb: 0 }} color="text.secondary" gutterBottom>
                #{id} - Last updated on:{' '}
                {createdAt ? dayjs(createdAt).format('DD MMM YYYY') : EMPTY_PLACEHOLDER}
              </Typography>
              <Typography variant="h5" component="div">
                {name || EMPTY_PLACEHOLDER}
              </Typography>
            </Box>
          </CardHeader>
          <Box sx={{ mt: 2 }}>
            <Typography component="p" display="flex" alignItems="center" marginBottom={1}>
              <EmailOutlinedIcon sx={{ mr: 0.5 }} />
              {email || EMPTY_PLACEHOLDER}
            </Typography>
            <Typography component="p" display="flex" alignItems="center" marginBottom={1}>
              <PhoneOutlinedIcon sx={{ mr: 0.5 }} />
              {phone || EMPTY_PLACEHOLDER}
            </Typography>
            <Typography component="p" display="flex" alignItems="center" marginBottom={1}>
              <CakeOutlinedIcon sx={{ mr: 0.5 }} />
              {birthday ? dayjs(birthday).format('DD MMM YYYY') : EMPTY_PLACEHOLDER}
            </Typography>
          </Box>
        </CardContent>

        <CardActions>
          <Button size="small" variant="outlined" onClick={() => setIsModalVisible(true)}>
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => deleteContact.mutate({ id })}
            disabled={isLoading}
            {...(isLoading && {
              variant: 'contained',
              startIcon: <CircularProgress size={16} color="primary" />,
            })}
          >
            Delete
          </Button>
        </CardActions>
      </Card>

      <EditContactModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        contactDetails={details}
      />
    </>
  )
}

export default ContactCard
