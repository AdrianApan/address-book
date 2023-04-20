import { useState, useEffect } from 'react'
import useGetContacts from 'src/hooks/useGetContacts'

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { refetch } = useGetContacts(searchTerm)

  useEffect(() => {
    const refetchData = setTimeout(() => {
      refetch()
    }, 350)
    return () => clearTimeout(refetchData)
  }, [searchTerm])

  return { setSearchTerm }
}

export default useSearch
