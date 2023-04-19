import Box from '@mui/material/Box'

import { LayoutTypes } from 'src/types/Layout'

interface Props {
  type?: LayoutTypes
  children: React.ReactNode
}

// Not in use for now but can be extended later with more Layout types
const Layout = ({ type = 'default', children }: Props) => {
  return (
    <Box role="main" sx={{ padding: 2 }}>
      {children}
    </Box>
  )
}

export default Layout
