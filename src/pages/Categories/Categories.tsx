import { useParams } from "react-router-dom"
import { items } from "../../data"
import { Iitem } from "../../types/Iitem"
import { ItemCategories } from "../../types/EnumCategories"
import { Link } from "react-router-dom"
import "./Categories.scss"

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
        <div className="categories">
            <h2 className="categories__header">{category?.toUpperCase()}</h2>
            <div className="categories__buttons">
                <Link to={"/categories/all"}><button>All</button></Link>
                <Link to={"/categories/furniture"}><button>Furnitures</button></Link>
                <Link to={"/categories/electronic"}><button>Electronics</button></Link>
                <Link to={"/categories/lamp"}><button>Lamps</button></Link>
                <Link to={"/categories/kitchen"}><button>Kitchen</button></Link>
                <Link to={"/categories/chair"}><button>Chairs</button></Link>
                <Link to={"/categories/skin-care"}><button>Skin Care</button></Link>
            </div>

            {
                filterItems(category as ItemCategories).map((item) => (
                    <div>
                        <h4>{item.id}</h4>
                        <p>{item.description}</p>
                        <img src={item.img} alt={item.description} />
                    </div>)
                )
            }
        </div>
    )
}

export default Categories