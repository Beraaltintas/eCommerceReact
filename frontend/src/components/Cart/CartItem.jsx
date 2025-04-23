import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

const CartItem = ({cartItem}) => {
  const {removeFromCart} = useContext(CartContext);
  return (
    <tr className="cart-item">
    <td></td>
    <td className="cart-image">
      <img src={cartItem.img.singleImage} alt="" />
      <i className="bi bi-x delete-cart" onClick={()=> removeFromCart(cartItem.id)}></i>
    </td>
    <td>{cartItem.name}</td>
    <td>${cartItem.price.newPrice}</td>
    <td className="product-quantity">1</td>
    <td className="product-subtotal">$108.00</td>
  </tr>
  )
}

export default CartItem
CartItem.propTypes = {
  cartItem: PropTypes.object
}