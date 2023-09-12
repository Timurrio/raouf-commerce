import "./Navbar.scss"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../features/store"
import { toggleIsActive } from "../../features/cartSlice/cartSlice"
import { useState } from "react"
import { useSelector } from "react-redux"

const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [isActive, setIsActive] = useState(false)
    const cartItemsLength = useSelector<RootState, number>((state => state.cart.items.length))

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={"/"}>
                    <img className="navbar__logo" src={logo} alt="Logo" />
                </Link>
                <ul className="navbar__links-block">
                    <li className="navbar__link">
                        <Link to={"/"}>
                            HOME
                        </Link>
                    </li>
                    <li className="navbar__link">
                        <Link to={"/categories/all"}>
                            CATEGORIES
                        </Link>
                    </li>
                    <li className="navbar__link">
                        <Link to={"/products/1"}>
                            PRODUCT PAGE
                        </Link>
                    </li>
                    <li className="navbar__cart-button" onClick={() => dispatch(toggleIsActive())}>
                        <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                        {cartItemsLength > 0 ? <p className="cart-length">{cartItemsLength}</p> : <p></p>}
                    </li>
                    <li className="navbar__menu-button" onClick={() => { setIsActive(prev => !prev) }}>
                        ≡
                    </li>
                </ul>
            </div>
            <div className={`mobile-menu ${isActive ? "mobile-menu--active" : " "}`}>
                <p className="mobile-menu__close-button" onClick={() => { setIsActive(prev => !prev) }}>X</p>
                <div className="mobile-menu__links-block">
                    <ul className="mobile-menu__links-list">
                        <li className="mobile-menu__link">
                            <Link to={"/"}>
                                HOME
                            </Link>
                        </li>
                        <li className="mobile-menu__link">
                            <Link to={"/categories/all"}>
                                CATEGORIES
                            </Link>
                        </li>
                        <li className="mobile-menu__link">
                            <Link to={"/products/1"}>
                                PRODUCT PAGE
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar