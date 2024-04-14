import { useNavigate } from "react-router-dom"
import "./cart.css"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const userToken = useSelector(state => state.user[0].token);
    console.log(userToken);
    useEffect(()=>{
      fetch("http://fashion.somee.com/api/Cart",{
        method:"get",
        headers : new Headers({
          'Authorization' : 'Bearer ' + userToken
        })
      })
      .then(res => res.json())
      .then(data => setProducts(data.data))
    },[userToken])
    console.log(products);
  return (
    <div className="cart container">
        <span className="circle"></span>
        <span
          className="back_btn"
          onClick={()=> navigate("/")}
        >
          <IoArrowBackCircleOutline size="30"/>
        </span>

        <h1>Shopping Cart</h1>

        <div id="cart-items">
          {products.map((product)=>(
            <div className="product_cart" key={product.id}>
              <div className="img">
                <img src={product.product.imageUrl} alt="cart-img" />
              </div>
              <div className="details">
                <h3>{product.product.title}</h3>
                <p>{product.product.description}</p>
                <p>{product.product.price}$</p>
              </div>
            </div>
          ))}
        </div>
        
        <div id="total"></div>

        <button id="checkout-btn">Proceed to Payment</button>
    </div>
  )
}

export default Cart