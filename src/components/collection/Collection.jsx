import { useEffect, useState } from "react"
import "./collection.css"
import axios from "axios";
import { CiHeart, CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../variables/variables";
import { useAuth } from "../../context/AuthContext";

const Collection = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [loader, setLoader] = useState(true);
    const {user} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`${baseUrl}/Category`)
        .then(res => setCategories(res.data.data));
    
        axios.get(`${baseUrl}Product${category !== "" ? `/${category}` : ""}`)
        .then(res => {
          setProducts(res.data.data)
          setLoader(false)
        });
    },[category])

  return (
    <section className="section collection" id="collection">
      <div className="title">
        <span>COLLECTION</span>
        <h2>Our Top Collection</h2>
      </div>
      <div className="filters d-flex">
            <div 
                data-filter="All"
                onClick={()=> setCategory("")}
            >
                All
            </div>
        {categories.map((category)=>(
            <div 
                key={category.id} 
                data-filter={category.name}
                onClick={()=> setCategory(category.name)}
            >
                {category.name}
            </div>
        ))}
      </div>

      <div className="products container">
              {loader
              ? <span className="loader"></span>
              : products.map((product)=>(
                <div className="product" key={product.id} onClick={()=> user ? navigate(`/products/${product.id}`) : navigate(`/log`)}>
                <div className="top d-flex">
                  <img src={product.imageUrl} alt="img" />
                  <div className="icon d-flex">
                    <CiHeart />
                  </div>
                </div>
                <div className="bottom">
                  <h4>{product.title}</h4>
                  <div className="d-flex">
                    <div className="price">${product.price}</div>
                    <div className="rating">
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                    </div>
                  </div>
                </div>
              </div> 
             ))}
      </div>
    </section>
  )
}

export default Collection