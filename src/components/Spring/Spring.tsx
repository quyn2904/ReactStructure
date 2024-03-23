//components
import { animated, useSpring } from '@react-spring/web'

//hooks
import { useInView } from 'react-intersection-observer'

// utils
import PropTypes from 'prop-types'

// constants
import { SpringType } from 'src/constants/enums'

interface SpringProps {
  index?: number
  className?: string
  type?: SpringType
  children: React.ReactNode
  duration?: number
  delay?: number
  id?: string
}

/**
 * @author quyn2904
 * @description Component Spring dùng để thêm animation cho component con
 * @param index?: number, nếu không có delay thì đây là thứ tự của animation
 * @param className?: string, class của component, dùng để custom style cho animated.div
 * @param type?: SpringType: [fade, slideUp, slideLeft, zoom]
 * @param children: React.ReactNode, nội dung cần thêm animation
 * @param duration?: number, thời gian của animation, Default Value = 300
 * @param delay?: number, thời gian delay của animation, nếu không có delay thì index sẽ được sử dụng
 * @param id?: string, id của animated.div
 * @returns Animated.div
 * @version 1.0
 */

const Spring = ({ children, index = 1, className, type = SpringType.FADE, ...props }: SpringProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const commonProps = {
    config: { duration: props.duration ? props.duration : 300 },
    delay: props.delay ? props.delay : 100 * index
  }

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    ...commonProps,
    ...props
  })

  const slideLeft = useSpring({
    from: { transform: 'translateX(50px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    ...commonProps,
    ...props
  })

  const slideUp = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    ...commonProps,
    ...props
  })

  const zoom = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    ...commonProps,
    ...props
  })

  const spring = {
    fade,
    slideLeft,
    slideUp,
    zoom
  }

  return (
    <animated.div className={className ? className : ''} id={props.id} style={spring[type]} ref={ref}>
      {children}
    </animated.div>
  )
}

Spring.propTypes = {
  index: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.oneOf(['fade', 'slideUp', 'slideLeft', 'zoom']),
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number
}
export default Spring
