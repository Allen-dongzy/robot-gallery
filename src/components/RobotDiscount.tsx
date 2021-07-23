import React, { useContext } from 'react'
import { appContext } from '../AppState'
import styles from './Robot.module.css'
import { useAddToCart } from './addToCart'

interface Props {
  id: number
  name: string
  email: string
}

const RobotDiscount: React.FC<Props> = ({ id, name, email }) => {
  const contenxt = useContext(appContext)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contenxt.username}</p>
      <button onClick={() => { addToCart(id, name) }}>加入购物车</button>
    </div>
  )
}

export default RobotDiscount