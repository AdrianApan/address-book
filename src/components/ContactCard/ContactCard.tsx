import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import { Contact } from 'src/types/Contact'

import { CardHeader, StyledAvatar } from './ContactCard.styles'
import useDeleteContact from 'src/hooks/useDeleteContact'

const ContactCard = ({ details }: { details: Contact }) => {
  const { id, name, avatar, email, phone, birthday, createdAt } = details
  const deleteContact = useDeleteContact()

  return (
    <Card variant="outlined" sx={{ padding: 2 }}>
      <CardContent sx={{ pr: 2 }}>
        <CardHeader>
          <StyledAvatar alt={name} src={avatar} />
          <Box>
            <Typography sx={{ fontSize: 12, mb: 0 }} color="text.secondary" gutterBottom>
              #{id} - Last updated on: {dayjs(createdAt).format('DD MMM YYYY')}
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </Box>
        </CardHeader>
        <Box sx={{ mt: 2 }}>
          <Typography component="p">
            <b>✉️ Email:</b> {email}
          </Typography>
          <Typography component="p">
            <b>📞 Phone:</b> {phone}
          </Typography>
          <Typography component="p">
            <b>🎉 DOB:</b> {dayjs(birthday).format('DD MMM YYYY')}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" variant="outlined">
          Edit
        </Button>
        <Button size="small" color="error" onClick={() => deleteContact.mutate({ id })}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default ContactCard
