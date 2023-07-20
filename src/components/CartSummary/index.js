import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getTotalPrice = () => {
        let totalAmount = 0
        cartList.forEach(eachItem => {
          totalAmount += eachItem.price * eachItem.quantity
        })

        return totalAmount
      }

      const getTotalItems = () => cartList.length

      const totalPrice = getTotalPrice()
      const totalItems = getTotalItems()

      return (
        <div className="cart-summary-container">
          <div className="cart-summary-content">
            <div className="order-total-container">
              <h1 className="order-total-text">Order Total: </h1>
              <h1 className="total-price">Rs {totalPrice}/-</h1>
            </div>
            <p className="total-items-count">
              {totalItems} {totalItems > 1 ? 'Items' : 'Item'} in cart
            </p>
          </div>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
