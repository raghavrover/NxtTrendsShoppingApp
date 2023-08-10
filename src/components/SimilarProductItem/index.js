import {Link} from 'react-router-dom'
import './index.css'

const SimilarProductItem = props => {
  const {productDetails, getSimilarProductData} = props
  const {id, title, brand, imageUrl, rating, price} = productDetails

  const getProduct = () => {
    getSimilarProductData()
  }

  return (
    <li className="similar-product-item" onClick={getProduct}>
      <Link to={`/products/${id}`} className="similar-product-link-item">
        <img
          src={imageUrl}
          className="similar-product-img"
          alt={`similar product ${title}`}
          loading="lazy"
        />
        <p className="similar-product-title">{title}</p>
        <p className="similar-products-brand">by {brand}</p>
        <div className="similar-product-price-rating-container">
          <p className="similar-product-price">Rs {price}/-</p>
          <div className="similar-product-rating-container">
            <p className="similar-product-rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="similar-product-star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SimilarProductItem
