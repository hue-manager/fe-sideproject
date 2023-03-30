import React from 'react'
import './button.css'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'width'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void

  type: 'button' | 'submit' | 'reset'

  show?: boolean
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type,
  onClick,
  show = true,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  const display = show ? 'display' : 'storybook-button--hidden'

  return (
    <button
      onClick={onClick}
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode, display].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
