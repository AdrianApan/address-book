import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'

import { StyledCard } from './Search.styles'
import AddContact from 'src/components/AddContact'

const Search = () => {
  return (
    <Box component="form">
      <StyledCard variant="outlined">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search contacts"
          inputProps={{ 'aria-label': 'search contacts' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, mx: 2, my: 0.5 }} orientation="vertical" />
        <AddContact />
      </StyledCard>
    </Box>
  )
}

export default Search
