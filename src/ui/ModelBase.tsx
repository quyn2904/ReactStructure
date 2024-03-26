// components
import Modal from '@mui/material/Modal'
import Grow from '@mui/material/Grow'

// utils
import PropTypes from 'prop-types'

interface ModalBaseProps {
  open: boolean
  onClose: () => void
  children: React.ReactElement
}

const ModalBase = ({ open, onClose, children }: ModalBaseProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      classes={{
        root: 'flex justify-center items-center p-5'
      }}
      closeAfterTransition
    >
      <Grow in={open} timeout={300}>
        {children}
      </Grow>
    </Modal>
  )
}

ModalBase.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default ModalBase
