import './navbar.css';
import logo from "../../assets/logo.svg"
import { IoIosClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch, CiUser } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Navbar = ({count}) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  useEffect(()=>{
    const navList = document.querySelector(".nav-list");
    document.querySelector(".hamburger").onclick = () => {
      navList.classList.add("show");
    };
    document.querySelector(".close").onclick = () => {
      navList.classList.remove("show");
    };
    
  },[])
  return (
    <nav className="navbar">
        <div className="row container d-flex">
            <div className="logo">
              <img className="photo" src={logo} alt="" />
            </div>
          <div className="nav-list d-flex">
            <a href="#">Home</a>
            <a href="#collection">Shop</a>
            <a href="#">Pages</a>
            <a href="#">About Us</a>
            <a href="">Lookups</a>
            <div className="close">
              <IoIosClose />
            </div>
          </div>

        <div className="icons d-flex">
            <div className="icon d-flex">
              <CiSearch />
            </div>
            <div className="icon user-icon d-flex">
              <Link to={"/log"}><CiUser /></Link>
            </div>
            <div className="icon d-flex" onClick={()=> user.length > 0 ? navigate('/cart') : navigate(`/log`) }>
              <IoCartOutline />
              <p className="class-btn">{count}</p>
            </div>
          </div>

          <div className="hamburger">
            <BiMenuAltRight />
          </div>
        </div>
      </nav>
  )
}

export default Navbar