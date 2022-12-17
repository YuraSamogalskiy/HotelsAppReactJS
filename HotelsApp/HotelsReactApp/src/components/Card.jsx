import React from 'react'
import styles from './Card.module.css'
import { FaPlus } from 'react-icons/fa'

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      {data.map((item) => (
        <div key={item.id} className={styles.cardBody}>
          <img src={item.img} alt="" />
          <a href={item.url} className={styles.txt}>
            <h2 className={styles.name}>{item.name}</h2>
          </a>
          <h3 className={styles.status}>{item.status}</h3>
          <br />
          <p className={styles.rate}>{item.rate}</p>
          <br />
          <p className={styles.city}>{item.city}</p>
          <p className={styles.service}>{item.service}</p>

          <FaPlus className={styles.addCard} />
        </div>
      ))}
    </div>
  )
}

export default Card
