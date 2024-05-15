import { Link, useNavigate } from 'react-router-dom'
import './viewProducts.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../variables/variables';
import { CiEdit,CiTrash } from "react-icons/ci";
import { useAuth } from '../../../context/AuthContext';

const ViewProducts = () => {
    const [products, setProducts]= useState([]);
    const [refetch, setReFetch]= useState(false);
    const {user} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`${baseUrl}Product`)
        .then(res=> setProducts(res.data.data))
    },[refetch])

    const handleRemoveProduct =(productId)=>{
        fetch(`${baseUrl}Product/${productId}`,{
            method: "delete", 
            headers: new Headers({
              'Authorization': `Bearer ${user.token}`
            })
          })
          .then(res => res.json())
          .then(() => setReFetch(!refetch))
    }

  return (
    <div className="viewProducts">
        <div className="container">
            <div className="header">
                <h2>Products</h2>

                <Link to={"/dashboard/products/add"}>Add Product</Link>
            </div>

            <div className="products">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {products.map((product)=>(
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stockQuantity}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category.name}</td>
                                    <td className='actions'>
                                        <span 
                                            className='edit'
                                            onClick={()=>navigate(`dashboard/products/edit/${product.id}`)}
                                        >
                                            <CiEdit size="20"/>
                                        </span>    
                                        <span 
                                            className='remove'
                                            onClick={()=> handleRemoveProduct(product.id)}
                                        >
                                            <CiTrash size="20"/>
                                        </span>     
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewProducts