import React from 'react'
import { users } from '/Users/ysamogal/Desktop/LastTry/99-template-dark/src/users'
import styles from './Button.module.css'

const Button = ({ filterUsers, setFiltered, menuUsers }) => {
  // console.log(menuUsers)
  return (
    <div>
      <div className={styles.blockButtons}>
        {menuUsers.map((item, id) => {
          return (
            <button
              className={styles.ButtonCriterie}
              onClick={() => filterUsers(item)}
              key={id}
            >
              {item}
            </button>
          )
        })}
        <button className={styles.ButtonAll} onClick={() => setFiltered(users)}>
          All
        </button>
      </div>
    </div>
  )
}

export default Button
