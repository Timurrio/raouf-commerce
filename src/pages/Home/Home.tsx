import "./Home.scss"
import banner1 from "../../images/img/banner/banner1.jpg"
import banner2 from "../../images/img/banner/banner2.jpg"
import featured1 from "../../images/img/header/home-img-1.jpg"
import featured2 from "../../images/img/header/home-img-2.jpg"
import featured3 from "../../images/img/header/home-img-3.jpg"
import featured4 from "../../images/img/header/home-img-4.jpg"
import { items } from "../../data"
import { Link } from "react-router-dom"
import { Trending } from "../../components/Trending/Trending"
import ProductCard from "../../components/ProductPreview/ProductCard"


export const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="home">


        <div className="home__featured-grid">
          <div className="home__featured-item featured-item-a">
            <img className="home__featured-image" src={featured1} alt="featured" />
            <Link to={"/categories/furniture"}>
              <div className="home__featured-info">
                <h2 className="home__feature-header">Live Comfortably</h2>
              </div>
            </Link>
          </div>
          <div className="home__featured-item featured-item-b">
            <img className="home__featured-image" src={featured2} alt="featured" />
            <Link to={"/categories/skin-care"}>
              <div className="home__featured-info">
                <h2 className="home__feature-header">HW Scincare</h2>
              </div>
            </Link>
          </div>
          <div className="home__featured-item featured-item-c">
            <img className="home__featured-image" src={featured3} alt="featured" />
            <Link to={"/categories/kitchen"}>
              <div className="home__featured-info">
                <h2 className="home__feature-header">Kitchen & Dining</h2>
              </div>
            </Link>
          </div>
          <div className="home__featured-item featured-item-d">
            <img className="home__featured-image" src={featured4} alt="featured" />
            <Link to={"/categories/electronic"}>
              <div className="home__featured-info">
                <h2 className="home__feature-header">Home Electronics</h2>
              </div>
            </Link>
          </div>
        </div>


        <div className="home__products">
          <p className="home__products-header">
            Products we are proud of
          </p>
          <div className="home__product-cards">
            {
              items.slice(0, 8).map((item) => (
                <ProductCard item={item} />
              ))
            }
          </div>
        </div>
        <div className="home__banner">
          <div className="home__banner-info">
            <h3 className="home__banner-header">
              Creative harmonious living
            </h3>
            <p className="home__banner-text">
              RAOUF Products are all made to standard sizes so that you can mix and match them freely.
            </p>
            <Link to="/categories/all">
              <button className="home__banner-button">
                SHOP NOW
              </button>
            </Link>
          </div>
          <img src={banner1} alt="banner1" className="home__banner-img" />
        </div>
        <Trending />
        <div className="home__banner">
          <img src={banner2} alt="banner2" className="home__banner-img" />
          <div className="home__banner-info">
            <h3 className="home__banner-header">
              Comfortable & Elegante Living
            </h3>
            <p className="home__banner-text">
              RAOUF Products are all made to standard sizes so that you can mix and match them freely.
            </p>
            <Link to="/categories/all">
              <button className="home__banner-button">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
