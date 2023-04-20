import { useState } from 'react'

const useContactCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleClose = () => setIsModalVisible(!setIsModalVisible)
  const handleExpandClick = () => setExpanded(!expanded)

  return {
    isModalVisible,
    setIsModalVisible,
    handleClose,
    expanded,
    handleExpandClick,
  }
}

export default useContactCard
