import { useParams } from "react-router-dom"
import "./ProductPage.scss"
import { items } from "../../data"

const Product = () => {
    const { id } = useParams()
    const product = items.find(item => item.id === Number(id))

    return (
        <div className="productpage">{product?.category} - {product?.description}</div>
    )
}

export default Product