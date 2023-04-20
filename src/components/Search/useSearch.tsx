import { useState, useEffect } from 'react'
import useGetContacts from 'src/hooks/useGetContacts'

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { refetch } = useGetContacts(searchTerm)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userInput = data.get('search')
    setSearchTerm(userInput as string)
  }

  useEffect(() => {
    refetch()
  }, [searchTerm])

  return { handleSubmit }
}

export default useSearch
