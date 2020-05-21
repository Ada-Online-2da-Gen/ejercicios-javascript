import React from 'react'
import { FaHome } from 'react-icons/fa'
import styles from './Icon.module.scss'

const ICONS = {
  home: FaHome,
}

const Icon = ({ name, size, color, className, ...props }) => {
  const SelectedIcon = ICONS[name]

  return (
    <SelectedIcon
      className={`
        ${styles.icon} 
        ${styles[`size-${size}`]} 
        ${styles[`color-${color}`]} 
        ${className}`}
      {...props}
    />
  )
}

export { ICONS }
export default Icon
