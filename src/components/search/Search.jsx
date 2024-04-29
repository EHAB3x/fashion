import axios from 'axios';
import './search.css'
import { useEffect, useState } from 'react'
import baseUrl from '../../variables/variables';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Search = () => {
    const [search, setSearch] = useState("");
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [filterProducts, setFilteredProducts] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        axios.get(`${baseUrl}/Product`)
        .then(res=> setFetchedProducts(res.data.data))
    },[])

    useEffect(()=>{
        setFilteredProducts(fetchedProducts.filter(product=> product.title.toLowerCase().includes(search)));
    },[search,fetchedProducts])

    useEffect(()=>{
        let overlay = document.querySelector(".search__overlay");
        let search = document.querySelector(".search");
        overlay.addEventListener("click",()=>{
            search.classList.remove("show__search")
        })
    })
  return (
    <div className="search">
        <div className="search__overlay"></div>
        <div className={`search__input`}>
            <input 
                type="text" 
                name="search" 
                id="search" 
                placeholder="Search for the product you want..."
                onChange={(e)=> setSearch(e.target.value) }
            />
        </div>

        <div className={`search__result ${search === '' ? "hide" :""}`}>
            {filterProducts.map((product)=>(
                <Link to={`${user ? `/products/${product.id}`: "/log"}`} key={product.id} className="search__product">
                    <div className="image">
                        <img src={product.imageUrl} alt="product-img"/>
                    </div>

                    <div className="details">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Search