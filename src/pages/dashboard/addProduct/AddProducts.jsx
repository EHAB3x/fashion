import { useState } from 'react'
import './addProduct.css'
import baseUrl from '../../../variables/variables'
import { useAuth } from '../../../context/AuthContext'

const AddProducts = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState(0)
    const [image, setImage] = useState("")
    const {user} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${baseUrl}Product`, {
            method: "post",
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json' // Specify the content type
            },
            body: JSON.stringify({ // Convert data to JSON format
                title,
                price,
                description,
                stockQuantity: stock,
                imageUrl: image
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Product added:', data);
            // Optionally, you can perform some action after successful addition
        })
        .catch(error => {
            console.error('Error adding product:', error);
            // Handle error here
        });
    }
    
  return (
    <div className="add">
        <div className="container">
            <h2>Enter The Product Details</h2>

            <form action="#">
                <div className="form_field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"
                    onChange={(e)=> setTitle(e.target.value)}/>
                </div>

                <div className="form_field">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price"
                    onChange={(e)=> setPrice(e.target.value)}/>
                </div>

                <div className="form_field">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description"
                    onChange={(e)=> setDescription(e.target.value)}/>
                </div>

                <div className="form_field">
                    <label htmlFor="stock">Stock Quantity</label>
                    <input type="number" name="stock" id="stock"
                    onChange={(e)=> setStock(e.target.value)}/>
                </div>
                
                <div className="form_field">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" name="image" id="image"
                    onChange={(e)=> setImage(e.target.value)}/>
                </div>

                <input type="submit" value="Add Product" className='sub' onClick={(e)=>handleSubmit(e)}/>
            </form>
        </div>
    </div>
  )
}

export default AddProducts