import dayjs from 'dayjs'

import useEditContact from 'src/hooks/useEditContact'

const useEditContactModal = (id: string, handleClose: () => void) => {
  const editContact = useEditContact()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const birthday = data.get('dob') as string

    const updatedData = {
      name: name || '',
      email: email || '',
      phone: phone || '',
      birthday: birthday ? dayjs(birthday).toString() : '',
    }

    editContact.mutate({ id: id, data: updatedData })
    handleClose()
  }

  return { handleSubmit }
}

export default useEditContactModal
