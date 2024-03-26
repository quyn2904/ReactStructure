// components
import Fade from '@mui/material/Fade'
import Tooltip from '@mui/material/Tooltip'

interface CustomTooltipProps {
  children: React.ReactElement
  withArrow?: boolean
  tooltipClass?: string
  title: React.ReactNode
}

const CustomTooltip = ({ children, withArrow = true, tooltipClass, title }: CustomTooltipProps) => {
  return (
    <Tooltip
      TransitionComponent={Fade}
      arrow={withArrow}
      classes={{
        popper: 'p-[15px]',
        tooltip: `!bg-widget shadow !rounded-sm !p-0 !font-body !text-body-text ${tooltipClass || ''}`,
        arrow: '!text-widget'
      }}
      enterTouchDelay={0}
      leaveTouchDelay={5000}
      title={title}
    >
      {children}
    </Tooltip>
  )
}

export default CustomTooltip
