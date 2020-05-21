import React from 'react'
import styles from './Button.module.scss'
import Icon from 'components/Icon/Icon'

console.log(styles)

const Button = ({
  size,
  color,
  rounded,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type='button'
      className={`
        ${styles.button} 
        ${styles[`size-${size}`]} 
        ${styles[`color-${color}`]} 
        ${styles[`rounded-${rounded}`]} 
        ${className}`}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} size={size} color='white' />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={size} color='white' />}
    </button>
  )
}

export default Button
