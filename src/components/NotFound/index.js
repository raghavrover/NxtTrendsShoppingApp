import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="page-not-found-text">Page Not Found</h1>
    <Link to="/" className="anchor-tag">
      Back to Home
    </Link>
    <p className="page-not-found-suggestion">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
