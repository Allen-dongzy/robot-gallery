import React, { useContext } from 'react'
import { appContext } from '../AppState'
import styles from './Robot.module.css'

interface RobotProps {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const contenxt = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contenxt.username}</p>
    </div>
  )
}

export default Robot