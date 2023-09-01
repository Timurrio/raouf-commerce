import "./Cart.scss"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../features/store"
import { toggleIsActive } from "../../features/cartSlice/cartSlice"

const Cart = () => {
    const isActive = useSelector<RootState, boolean>(state => state.cart.isActive)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className={`cart-wrapper ${isActive ? "cart-wrapper--opened" : "cart-wrapper--closed"}`} >
            <div className="cart-background"></div>
            <div className="cart">
                <p className="cart__header">Your Shopping Cart (1)</p>
                <p className="cart__close-button" onClick={() => dispatch(toggleIsActive())}>X</p>
            </div>
        </div>

    )
}

export default Cart