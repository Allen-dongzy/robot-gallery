import React, { useContext } from 'react'
import { appContext } from '../AppState'
import styles from './Robot.module.css'
import { withAddToCart } from './addToCart'

export interface Props {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

const Robot: React.FC<Props> = ({ id, name, email, addToCart }) => {
  const contenxt = useContext(appContext)

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contenxt.username}</p>
      <button onClick={() => { addToCart(id, name) }}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot)