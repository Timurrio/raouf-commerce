import "./Trending.scss"
import { items } from "../../data"
import ProductCard from "../ProductPreview/ProductCard"
import { useRef } from "react"

export const Trending = () => {
    const itemsList = useRef(null)

    function scrollItemsList(val: number) {
        //@ts-ignore
        itemsList.current.scrollLeft += val
    }

    return (
        <div className="trending">
            <div className="trending__header-block">
                <p className="trending__header">Trending Now</p>
                <div className="trending__buttons">
                    <button className="trending__button" onClick={() => scrollItemsList(-270)}>←</button>
                    <button className="trending__button" onClick={() => scrollItemsList(270)}>→</button>
                </div>
            </div>
            <div className="trending__items-list" ref={itemsList}>
                {
                    items.map((item) => (
                        <div key={item.id} className="trending__item">
                            <ProductCard item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
