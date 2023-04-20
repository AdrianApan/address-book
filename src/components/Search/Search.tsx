import { InputBase, IconButton, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { StyledCard } from './Search.styles'
import { AddContact } from 'src/components/Contacts'
import useSearch from './useSearch'

const Search = () => {
  const { setSearchTerm } = useSearch()

  return (
    <StyledCard variant="outlined">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search contacts"
        inputProps={{ 'aria-label': 'search contacts', name: 'search' }}
        onChange={(e) => setSearchTerm(e.target.value)}
        startAdornment={<SearchIcon sx={{ mr: 1 }} />}
      />
      <Divider sx={{ height: 28, mx: 2, my: 0.5 }} orientation="vertical" />
      <AddContact />
    </StyledCard>
  )
}

export default Search
