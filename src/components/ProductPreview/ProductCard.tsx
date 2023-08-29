import "./ProductCard.scss"
import { Iitem } from "../../types/Iitem"
import { Link } from "react-router-dom"

interface ProductCardProps {
    item: Iitem
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    return (
        <div className="product-card">
            <Link to={`/products/${item.id}`} className="product-card__link">
                <img className="product-card__img" src={item.img} alt={item.category} />
                <p className="product-card__name">{item.description}</p>
                <h4 className="product-card__price">{item.price}$</h4>
            </Link>
        </div>
    )
}

export default ProductCard