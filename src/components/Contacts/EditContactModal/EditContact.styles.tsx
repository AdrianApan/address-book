import { styled } from '@mui/system'
import FormControl from '@mui/material/FormControl'

const StyledFormControl = styled(FormControl)({
  '.MuiInputBase-root': {
    border: '1px solid #e0e0e0',
    padding: 12,
    borderRadius: 4,

    ':focus-within': {
      border: '1px solid #1976d2',
    },

    '& input': {
      paddingLeft: 8,
    },
  },
})
export { StyledFormControl }
