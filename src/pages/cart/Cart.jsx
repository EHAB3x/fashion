import { useNavigate } from "react-router-dom"
import "./cart.css"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import baseUrl from "../../variables/variables";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

const Cart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [reFetch, setReFetch] = useState(true);
    const [total, setTotal] = useState(0);
    const {user} = useAuth();
    useEffect(()=>{
      fetch(`${baseUrl}Cart`,{
        method:"get",
        headers : new Headers({
          'Authorization' : 'Bearer ' + user.token
        })
      })
      .then(res => res.json())
      .then(data => {
        setProducts(data.data)
        let productsArray = data.data;
        let totalPrice = 0;
        productsArray.forEach((product) => {
            const price = product.product.price;
            const quantity = product.quantity;
            totalPrice += price * quantity;
        });
        setTotal(totalPrice);


      })
    },[user, reFetch, total])
    function deleteItem(productId){
      fetch(`${baseUrl}Cart/removefromcart/${productId}`,{
        method: "post", 
        headers: new Headers({
          'Authorization': `Bearer ${user.token}`
        })
      })
      .then(res => res.json())
      .then(() => setReFetch(!reFetch))
    }

    useEffect(()=>{
      if (user === null) {
        navigate("/")
      }
    },[user,navigate])
  
    if (user === null) {
      return null;
    }
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
          {products.map((product)=>{
            return(
              <div className="product_cart" key={product.id}>
                <div className="img">
                  <img src={product.product.imageUrl} alt="cart-img" />
                </div>
                <div className="details">
                  <h3>{product.product.title}</h3>
                  <p>{product.product.description}</p>
                  <p id="price">Price: {Number(product.product.price) * Number(product.quantity)}$</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <span className="empty__span"></span>
                <span 
                  className="delete_item"
                  onClick={()=> deleteItem(product.product.id)}
                >
                  <IoClose size="24"/>
                </span>
              </div>
            )
          })}
        </div>
        
        <div id="total">Total Price: {total.toFixed(2)}$</div>

        <button id="checkout-btn">Proceed to Payment</button>
    </div>
  )
}

export default Cart