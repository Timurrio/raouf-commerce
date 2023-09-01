import "./Cart.scss"
import emptyCartImg from "../../images/img/cart/empty-cart.png"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../features/store"
import { toggleIsActive } from "../../features/cartSlice/cartSlice"
import { useState } from "react"

const Cart = () => {
    const isActive = useSelector<RootState, boolean>(state => state.cart.isActive)
    const [cartVisible, setCartVisible] = useState(false)
    setTimeout(() => setCartVisible(true), 500)

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className={`cart-wrapper ${isActive ? "cart-wrapper--opened" : "cart-wrapper--closed"}`} onClick={() => dispatch(toggleIsActive())} >
            <div className={`cart ${cartVisible ? "" : "cart--display-none"}`} onClick={(e) => e.stopPropagation()}>
                <div className="cart__header-block">
                    <p className="cart__header">Your Shopping Cart (1)</p>
                    <p className="cart__header-button" onClick={() => dispatch(toggleIsActive())}>X</p>
                </div>
                <div className="cart__empty-cart">
                    <img className="cart__empty-cart-image" src={emptyCartImg} alt="Empty cart" />
                    <p className="cart__empty-cart-text">Your cart is empty</p>
                    <button className="cart__keep-browsing-button">Keep Browsing</button>
                </div>
            </div>
        </div>

    )
}


export default Cart