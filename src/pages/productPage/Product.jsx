import axios from "axios";
import "./product.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";


const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    document.documentElement.scrollTop = 0;
    const { productID } = useParams();
    const userToken = useSelector(state => state.user[0].token);
    useEffect(()=>{
      axios.get(`http://fashion.somee.com/api/Product/GetProduct/${productID}`)
      .then(res=> setProduct(res.data.data));
      let quant = product.stockQuantity;
      setQuantity(quant)
    },[productID,product.stockQuantity])
    const addToCart = ()=>{
      fetch(`http://fashion.somee.com/api/Cart/addtocart/${productID}`,{
        method:"post",
        headers : new Headers({
          'Authorization' : 'Bearer ' + userToken
        })
      });

      fetch(`http://fashion.somee.com/api/Product/${productID}/${value}`,{
        method:"put",
        headers : new Headers({
          'Authorization' : 'Bearer ' + userToken
        })
      })
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
                  quantity !== 1 && setQuantity(quantity - 1)
                  setValue(value + 1);
                }}
                />
            </span>
            <p className="quantity_number">{quantity}</p>
            <span className="minus">
              <CiSquarePlus 
                size="28"
                onClick={()=> {
                  setQuantity(quantity + 1)
                  setValue(value - 1);
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