import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  getCartItemIndex = id => {
    const {cartList} = this.state
    const index = cartList.findIndex(eachItem => {
      if (eachItem.id === id) {
        return true
      }
      return false
    })

    return index
  }

  addCartItem = product => {
    const {cartList} = this.state
    const cartItemIndex = this.getCartItemIndex(product.id)
    if (cartItemIndex === -1) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } else {
      const cartItem = cartList[cartItemIndex]
      const newItem = {
        ...cartItem,
        quantity: cartItem.quantity + product.quantity,
      }
      cartList.splice(cartItemIndex, 1, newItem)
      this.setState({cartList: [...cartList]})
    }
  }

  onIncrementQuantity = id => {
    const {cartList} = this.state

    const index = this.getCartItemIndex(id)
    const cartItem = cartList[index]
    const newCartItem = {...cartItem, quantity: cartItem.quantity + 1}
    cartList.splice(index, 1, newCartItem)
    this.setState({cartList: [...cartList]})
  }

  onDecrementQuantity = id => {
    const {cartList} = this.state

    const index = this.getCartItemIndex(id)
    const cartItem = cartList[index]
    const {quantity} = cartItem
    if (quantity > 1) {
      const newCartItem = {...cartItem, quantity: cartItem.quantity - 1}
      cartList.splice(index, 1, newCartItem)
      this.setState({cartList: [...cartList]})
    } else {
      const newCartList = cartList.filter(eachItem => eachItem.id !== id)
      this.setState({cartList: [...newCartList]})
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const newCartList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: [...newCartList]})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.onIncrementQuantity,
          decrementCartItemQuantity: this.onDecrementQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
