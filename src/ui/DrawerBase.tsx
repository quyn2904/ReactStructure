// components
import { AnchorType } from '@constants/enums'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

// utils
import PropTypes from 'prop-types'

interface DrawerBaseProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  anchor?: AnchorType
  children: React.ReactNode
}

const DrawerBase = ({ open, onOpen, onClose, anchor = AnchorType.LEFT, children }: DrawerBaseProps) => {
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          boxShadow: 'var(--shadow)',
          background: 'var(--widget)',
          color: 'var(--text)',
          height: 'var(--app-height)',
          minHeight: '-webkit-fill-available'
        }
      }}
      classes={{
        paper: '!w-full sm:!w-[342px] flex flex-col'
      }}
    >
      {children}
    </SwipeableDrawer>
  )
}

DrawerBase.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf(Object.values(AnchorType)),
  children: PropTypes.node.isRequired
}

export default DrawerBase
