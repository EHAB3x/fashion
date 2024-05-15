import { useEffect, useState } from 'react';
import './dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import baseUrl from '../../variables/variables';

const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useAuth();
    const [productsLenght, setProductsLength]= useState(0);
    useEffect(()=>{
        axios.get(`${baseUrl}Product`)
        .then(res=> setProductsLength(res.data.data.length))
    },[])

    useEffect(()=>{
        if (user === null) {
          navigate("/")
        }
    },[user,navigate])
    
    if (user === null) {
        return null;
    }

    return (
        <div className='dashboard'>
           <div className="container">
                <h1>Codevo Dashboard</h1>

                <div className="products-card">
                    <h2>NO. Products</h2>
                    <span>{productsLenght}</span>
                    <p>Are in the store</p>
                </div>

                <div className="view">
                    <Link to="/dashboard/products">View All Products</Link>
                </div>
           </div>
        </div>
    )
}

export default Dashboard