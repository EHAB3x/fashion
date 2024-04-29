import "./footer.css"
import { FaFacebookF, FaTwitter, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/logo.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="row container">
        <div className="col">
          <div className="logo d-flex">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Lorem ispum is a placeholder text <br />
            commonly used as a free text.
          </p>
          <div className="icons d-flex">
            <a  className ="icon d-flex one" href="https://www.twitter.com/" target="_blank" title="twitter"><FaTwitter /></a>
            <a  className ="icon d-flex 2" href="https://www.facebook.com/" target="_blank" title="Facebook"><FaFacebookF /></a>
            <a  className ="icon d-flex 3" href="https://www.instagram.com/" target="_blank" title="Instagram"><AiFillInstagram /></a>
            <a  className ="icon d-flex 4" href="www.linkedin.com/in/belal-khalil-b23445286" target="_blank" title="linkedin"><FaLinkedin /></a>
            </div>
          <p className="color">
            Copyrights 2024 <br />
          </p>
        </div>
        <div className="col">
          <div>
            <h4>Product</h4>
            <a href="">Download</a>
            <a href="">Pricing</a>
            <a href="">Locations</a>
            <a href="">Server</a>
            <a href="">Countries</a>
            <a href="">Blog</a>
          </div>
          <div>
            <h4>Category</h4>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Kids</a>
            <a href="">Best Seller</a>
            <a href="">New Arrivals</a>
          </div>
          <div>
            <h4>My Account</h4>
            <a href="">My Account</a>
            <a href="">Discount</a>
            <a href="">Returns</a>
            <a href="">Order History</a>
            <a href="">Order Tracking</a>
          </div>
          <div>
            <h4>Contact Us</h4>
            <div className="d-flex">
              <div className="icon"><FaLocationDot /></div>
              <span>123 Tanta university, Gharbeia, EG</span>
            </div>
            <div className="d-flex">
              <div className="icon"><IoMdMail /></div>
              <span>belal1236@gmail.com</span>
            </div>
            <div className="d-flex">
              <div className="icon"><FaPhone /></div>
              <span>+0201007032145</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer