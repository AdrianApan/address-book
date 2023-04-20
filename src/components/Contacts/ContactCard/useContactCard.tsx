import { useState } from 'react'

const useContactCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleClose = () => setIsModalVisible(!setIsModalVisible)

  return {
    isModalVisible,
    setIsModalVisible,
    handleClose,
  }
}

export default useContactCard
