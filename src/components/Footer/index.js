import {Link} from 'react-router-dom'
import {
  FaRegCopyright,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-content">
        <h1 className="follow-us-text">Follow Us on</h1>
        <div className="social-media-container">
          <Link to="/">
            <div className="social-media-icon-container">
              <FaInstagram className="social-media-icon" />
            </div>
          </Link>

          <Link to="/">
            <div className="social-media-icon-container">
              <FaFacebookF className="social-media-icon" />
            </div>
          </Link>

          <Link to="/">
            <div className="social-media-icon-container">
              <FaTwitter className="social-media-icon" />
            </div>
          </Link>

          <Link to="/">
            <div className="social-media-icon-container">
              <FaYoutube className="social-media-icon" />
            </div>
          </Link>
        </div>
        <div className="copy-right-content">
          <a href="#a" className="copyright-text">
            Conditions of use & sale
          </a>
          <a href="#a" className="copyright-text">
            Privacy Policy
          </a>
        </div>
        <div className="copy-right-content">
          <div className="icon-container">
            <FaRegCopyright className="copy-right-icon" />
          </div>
          <span className="copyright-text">
            2020-2023, NxtTrendz.in,Inc or its affiliates
          </span>
        </div>
      </div>
    </div>
  </>
)

export default Footer
