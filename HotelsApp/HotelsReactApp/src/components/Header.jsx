import React from 'react'
import styles from './Header.module.css'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
const Header = () => {
  let [openList, setOpenList] = useState(false)

  return (
    <header>
      <div className={styles.header}>
        <span className={styles.logo}>Hotel Search App</span>
        <FaBars
          onClick={() => setOpenList((openList = !openList))}
          className={styles.addList}
        />
        {openList && <div className={styles.list}></div>}
      </div>
    </header>
  )
}

export default Header
