import { useParams } from "react-router-dom"
import { items } from "../../data"
import { Iitem } from "../../types/Iitem"
import { ItemCategories } from "../../types/EnumCategories"
import { Link } from "react-router-dom"
import "./Categories.scss"
import ProductCard from "../../components/ProductPreview/ProductCard"

const Categories = () => {
    const { category } = useParams()

    function filterItems(curr: ItemCategories): Iitem[] {
        switch (curr) {
            case ItemCategories.ALL:
                return items
            case ItemCategories.CHAIR:
                return items.filter((item) => item.category === ItemCategories.CHAIR)
            case ItemCategories.ELECTRONIC:
                return items.filter((item) => item.category === ItemCategories.ELECTRONIC)
            case ItemCategories.FURNITURE:
                return items.filter((item) => item.category === ItemCategories.FURNITURE)
            case ItemCategories.KITCHEN:
                return items.filter((item) => item.category === ItemCategories.KITCHEN)
            case ItemCategories.LAMP:
                return items.filter((item) => item.category === ItemCategories.LAMP)
            case ItemCategories.SKINCARE:
                return items.filter((item) => item.category === ItemCategories.SKINCARE)
            default:
                return [] as Iitem[]
        }
    }


    return (
        <div className="categories-wrapper">
            <div className="categories">
                <h2 className="categories__header">{category?.toUpperCase()}</h2>
                <div className="categories__buttons">
                    <Link to={"/categories/all"}><button className="categories__button">All</button></Link>
                    <Link to={"/categories/furniture"}><button className="categories__button">Furnitures</button></Link>
                    <Link to={"/categories/electronic"}><button className="categories__button">Electronics</button></Link>
                    <Link to={"/categories/lamp"}><button className="categories__button">Lamps</button></Link>
                    <Link to={"/categories/kitchen"}><button className="categories__button">Kitchen</button></Link>
                    <Link to={"/categories/chair"}><button className="categories__button">Chairs</button></Link>
                    <Link to={"/categories/skin-care"}><button className="categories__button">Skin Care</button></Link>
                </div>
                <div className="categories__product-cards">
                    {
                        filterItems(category as ItemCategories).map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Categories