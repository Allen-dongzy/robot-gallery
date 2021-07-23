import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/shoppingCart'
import logo from './assets/images/logo.svg'

const App: React.FC = () => {

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<any>(Boolean)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setRobotGallery(data)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天onli ne购物平台的名字要长</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      {error && <div>网站出错：{error}</div>}
      {!loading ?
        (
          <div className={styles.robotList}>
            {robotGallery.map((item, index) =>
              index % 2 === 0 ? (
                <RobotDiscount id={item.id} email={item.email} name={item.name} />
              ) : (
                <Robot id={item.id} email={item.email} name={item.name} />
              )
            )}
          </div>
        ) : (
          <h2>loading 加载中</h2>
        )
      }
    </div >
  )
}

export default App
