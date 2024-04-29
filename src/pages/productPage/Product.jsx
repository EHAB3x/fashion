import axios from "axios";
import "./product.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import baseUrl from "../../variables/variables";
import { useAuth } from "../../context/AuthContext";


const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const {user} = useAuth();
    const navigate = useNavigate();
    document.documentElement.scrollTop = 0;
    const { productID } = useParams();
    useEffect(()=>{
      axios.get(`${baseUrl}Product/GetProduct/${productID}`)
      .then(res=> {
        setProduct(res.data.data)
      });
    },[productID])

    const addToCart = ()=>{
      fetch(`${baseUrl}Cart/addtocart/${productID}`,{
        method:"post",
        headers: new Headers({
          'Authorization': `Bearer ${user.token}` // Potential typo here
        })
      });
      
    }
  return (
    <div className="productPage">
        <span className="circle"></span>
        <span
          className="back_btn"
          onClick={()=> navigate("/")}
        >
          <IoArrowBackCircleOutline size="30"/>
        </span>
        <div className="product_img">
          <img src={product.imageUrl} alt="Product Image" />
        </div>
        <div className="product_details">
          <h2>{product.title}</h2>
          <p>{product.description}.</p>
          <p>Price: {product.price}$</p>
          <div className="quantity">
            <span className="plus">
              <CiSquareMinus 
                size="28"
                onClick={()=> {
                  quantity > 1 && setQuantity(quantity - 1);
                }}
                />
            </span>
            <p className="quantity_number">{quantity}</p>
            <span className="minus">
              <CiSquarePlus 
                size="28"
                onClick={()=> {
                  setQuantity(quantity + 1);
                }}
              />
            </span>
          </div>
          <button onClick={()=>addToCart()}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product