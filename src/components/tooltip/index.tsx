import { useState } from 'react'

import './styles/tooltip.scss'

const ToolTip = (props:TooltipProps) => {
  const { delay = 200, children, direction = 'top', tooltipContent } = props
  const [show, setShow] = useState(false)
  let timeout:ReturnType<typeof setTimeout>

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setShow(true)
    }, delay)
  }

  const hideTooltip = () => {
    clearInterval(timeout)
    setShow(false)
  }

  return (
    <div
      className='tooltip-container'
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {show && <div className={`tip ${direction}`}>{tooltipContent}</div>}
    </div>
  )
}

export default ToolTip

type Direction = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  children: React.ReactNode
  tooltipContent: React.ReactNode
  direction?: Direction
  delay?: number
}