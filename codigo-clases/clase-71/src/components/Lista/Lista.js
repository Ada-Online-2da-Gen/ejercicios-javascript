import React from 'react'
import { FaReact as ReactIcon } from 'react-icons/fa'
import styles from './lista.module.scss'

const Lista = () => {
  return (
    <ul className={styles.lista}>
      <li className={styles.listaItem}>Item 1</li>
      <li>
        <ReactIcon className={styles.listaIcon} />
        Item 2
      </li>
      <li>Item 3</li>
    </ul>
  )
}

export default Lista
