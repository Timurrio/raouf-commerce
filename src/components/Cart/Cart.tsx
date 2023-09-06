import "./Cart.scss"
import "./CartItem.scss"
import emptyCartImg from "../../images/img/cart/empty-cart.png"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../features/store"
import { toggleIsActive, removeCartItem, changeCartItemQuantity } from "../../features/cartSlice/cartSlice"
import { useState } from "react"
import { ICartItem } from "../../types/ICartItem"


function calculateTotalCost(items: ICartItem[]): number {
    return items.reduce((acc, cur) => (
        acc + (cur.item.price * cur.quantity)
    ), 0)
}

const emptyCart = (
    <div className="cart__empty-cart">
        <img className="cart__empty-cart-image" src={emptyCartImg} alt="Empty cart" />
        <p className="cart__empty-cart-text">Your cart is empty</p>
        <button className="cart__keep-browsing-button">Keep Browsing</button>
    </div>
)




const Cart = () => {
    const isActive = useSelector<RootState, boolean>(state => state.cart.isActive)
    const [cartVisible, setCartVisible] = useState(false)
    setTimeout(() => setCartVisible(true), 500)
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector<RootState, ICartItem[]>(state => state.cart.items)



    return (
        <div className={`cart-wrapper ${isActive ? "cart-wrapper--opened" : "cart-wrapper--closed"}`} onClick={() => dispatch(toggleIsActive())} >
            <div className={`cart ${cartVisible ? "" : "cart--display-none"}`} onClick={(e) => e.stopPropagation()}>
                <div className="cart__header-block">
                    <p className="cart__header">Your Shopping Cart ({items.length})</p>
                    <p className="cart__header-button" onClick={() => dispatch(toggleIsActive())}>X</p>
                </div>
                {items.length < 1 ? emptyCart : (
                    <div className="cart__full-cart">
                        <div className="cart__cart-items-list">
                            {
                                items.map((item) => (
                                    <div className="cart-item" key={item.item.id}>
                                        <img className="cart-item__image" src={item.item.img} alt={item.item.description} />
                                        <div className="cart-item__middle-part">
                                            <p className="cart-item__name">{item.item.description}</p>
                                            <div className="cart-item__change-quantity-block">
                                                <button className="cart-item__change-quantity-button" onClick={() => dispatch(changeCartItemQuantity({ item: item.item, newQuantity: item.quantity - 1 }))}>
                                                    -
                                                </button>
                                                <p className="cart-item__quantity">{item.quantity}</p>
                                                <button className="cart-item__change-quantity-button" onClick={() => dispatch(changeCartItemQuantity({ item: item.item, newQuantity: item.quantity + 1 }))}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item__right-part">
                                            <p className="cart-item__price">{item.item.price * item.quantity}.00$</p>
                                            <p className="cart-item__remove-button" onClick={() => dispatch(removeCartItem(item.item))}>X</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cart__checkout">
                            <p className="cart__subtotal">Subtotal: {calculateTotalCost(items)}.00$</p>
                            <button className="cart__checkout-button">Go To Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}


export default Cart