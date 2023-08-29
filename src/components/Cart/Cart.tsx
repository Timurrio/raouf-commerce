import { useState } from "react"
import "./Cart.scss"

const Cart = () => {
    const isActive = false

    return (
        <div className={"cart-wrapper " + isActive ? "cart-wrapper--hidden" : " "} >
            <div className="cart">
                <p className="cart__header">Your Shopping Cart (1)</p>
                <p className="cart__close-button" onClick={() => null}>X</p>
            </div>
        </div>

    )
}

export default Cart