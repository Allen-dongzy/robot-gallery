import React, { useContext } from 'react'
import { appContext, appSetStateContext } from '../AppState'
import styles from './Robot.module.css'

interface Props {
  id: number
  name: string
  email: string
}

const Robot: React.FC<Props> = ({ id, name, email }) => {
  const contenxt = useContext(appContext)
  const setState = useContext(appSetStateContext)

  const addToCart = () => {
    if (!setState) return
    setState(state => {
      return {
        ...state,
        shoppingCart: {
          items: [...state.shoppingCart.items, { id, name }]
        }
      }
    })
  }

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contenxt.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default Robot