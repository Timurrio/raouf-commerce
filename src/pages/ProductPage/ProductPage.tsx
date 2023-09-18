import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ProductPage.scss"
import { items } from "../../data"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../features/store"
import { addCartItem } from "../../features/cartSlice/cartSlice"
import { Trending } from "../../components/Trending/Trending"

const Product = () => {
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const [product, setProduct] = useState(items.find(item => item.id === Number(id)))
    const [quantity, setQuantity] = useState(1)
    const [currentImage, setCurrentImage] = useState(product?.img)

    useEffect(() => {
        let newProduct = items.find(item => item.id === Number(id))
        setProduct(newProduct)
        setQuantity(1)
        setCurrentImage(newProduct?.img)
    }, [id])

    return (
        <div className="product-page-wrapper">

            <div className="product-page">
                <div className="product-page__main">

                    <div className="product-page__images">
                        <img className="product-page__active-image" src={currentImage} alt="" />
                        <div className="product-page__image-carousel">
                            {
                                [product?.img].concat(product?.otherImgs).map((image) => (
                                    <img key={image} onMouseEnter={() => setCurrentImage(image)} src={image} alt="" />
                                ))
                            }
                        </div>
                    </div>

                    {/* Info block */}
                    <div className="product-page__info-block">
                        <h2 className="product-page__header">
                            {product?.description}
                        </h2>
                        <p className="product-page__description">
                            {product?.specs}
                        </p>
                        <div className="product-page__quantity">
                            <p className="product-page__quantity-header">Quantity</p>
                            <div className="product-page__quantity-change">
                                <button className="product-page__quantity-button" onClick={() => quantity > 1 ? setQuantity(val => val - 1) : null}>-</button>
                                <p className="product-page__quantity-counter">{quantity}</p>
                                <button className="product-page__quantity-button" onClick={() => setQuantity(val => val + 1)}>+</button>
                            </div>
                            {/* @ts-ignore */}
                            <p className="product-page__price">{product?.price * quantity}.00$</p>
                        </div>
                        <div className="product-page__buttons">
                            <button className="product-page__cart-button" onClick={() => dispatch(addCartItem({ item: product, quantity: quantity }))}>ADD TO CART</button>
                            <button className="product-page__buy-button">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="product-page__additional-info">
                    <div className="product-page__specification">
                        <p className="product-page__specification-header">Texture: </p>
                        <p className="product-page__specification-info">{product?.texture}</p>
                    </div>
                    <div className="product-page__specification">
                        <p className="product-page__specification-header">Weight: </p>
                        <p className="product-page__specification-info">{product?.weight}</p>
                    </div>
                    <div className="product-page__specification">
                        <p className="product-page__specification-header">Size: </p>
                        <p className="product-page__specification-info">{product?.size}</p>
                    </div>
                </div>

                <Trending />

            </div>
        </div>

    )
}

export default Product