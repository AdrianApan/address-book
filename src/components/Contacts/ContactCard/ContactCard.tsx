import dayjs from 'dayjs'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
} from '@mui/material'
import {
  EmailOutlined,
  PhoneOutlined,
  CakeOutlined,
  ExpandMore as ExpandMoreIcon,
  ModeEdit,
  Delete,
} from '@mui/icons-material'

import { Contact } from 'src/types/Contact'
import { EMPTY_PLACEHOLDER } from 'src/utils/consts'

import { CardHeader, StyledAvatar } from './ContactCard.styles'
import { EditContactModal } from 'src/components/Contacts'
import useDeleteContact from 'src/hooks/useDeleteContact'
import useContactCard from './useContactCard'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const ContactCard = ({ details }: { details: Contact }) => {
  const { id, name, avatar, email, phone, birthday, createdAt } = details
  const deleteContact = useDeleteContact()
  const { isModalVisible, setIsModalVisible, handleClose, expanded, handleExpandClick } =
    useContactCard()

  return (
    <>
      <Card variant="outlined">
        <CardContent sx={{ pr: 2 }}>
          <CardHeader>
            <StyledAvatar alt={name} src={avatar} />
            <Box>
              <Typography sx={{ fontSize: 12, mb: 0 }} color="text.secondary" gutterBottom>
                #{id} - Added on{' '}
                {createdAt ? dayjs(createdAt).format('DD MMM YYYY, HH:mm:ss') : EMPTY_PLACEHOLDER}
              </Typography>
              <Typography variant="h5" component="div">
                {name || EMPTY_PLACEHOLDER}
              </Typography>
            </Box>
          </CardHeader>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={() => setIsModalVisible(true)}>
            <ModeEdit />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => deleteContact.mutate({ id })}>
            <Delete />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component="p" display="flex" alignItems="center" marginBottom={1.5}>
              <EmailOutlined sx={{ mr: 1 }} />
              {email || EMPTY_PLACEHOLDER}
            </Typography>
            <Typography component="p" display="flex" alignItems="center" marginBottom={1.5}>
              <PhoneOutlined sx={{ mr: 1 }} />
              {phone || EMPTY_PLACEHOLDER}
            </Typography>
            <Typography component="p" display="flex" alignItems="center">
              <CakeOutlined sx={{ mr: 1 }} />
              {birthday ? dayjs(birthday).format('DD MMM YYYY') : EMPTY_PLACEHOLDER}
            </Typography>
          </CardContent>
        </Collapse>
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
