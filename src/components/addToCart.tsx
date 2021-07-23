import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import { Props } from './Robot'

export const withAddToCart = (ChildComponent: React.ComponentType<Props>) => {
  return (props) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
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
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id, name) => {
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
  return addToCart
}