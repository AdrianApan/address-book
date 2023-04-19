import { styled } from '@mui/system'
import Avatar from '@mui/material/Avatar'

const CardHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  marginRight: 12,
  border: '1px solid #e0e0e0',
})
export { CardHeader, StyledAvatar }
