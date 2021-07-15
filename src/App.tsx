import React from 'react'
import styles from './App.module.css'
import Robot from './components/Robot'
import ShoppingCart from './components/shoppingCart'
import logo from './assets/images/logo.svg'

interface Props { }

interface State {
  robotGallery: any[],
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json()
      })
      .then(res => {  
        this.setState({ robotGallery: res })
      })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
          console.log('count ', this.state.count)
        }}>Click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(item => <Robot id={item.id} email={item.email} name={item.name} />)}
        </div>
      </div>
    )
  }
}

export default App
