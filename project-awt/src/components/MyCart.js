import React, { useEffect, useState } from 'react'
import './cart.css'
import axios from 'axios';




const MyCart = (props) => {
    // const cartItems = props.onAddToCart;
    const [product,setProduct] = useState([])
    
    useEffect(() => {
        
        axios.get('http://localhost:3000/productcart')
          .then(ans => {
            console.log(ans)
            setProduct(ans.data)
           
          }
          )
          .catch(err => console.log(err))
      }, [])

    const calculateTotal = () => {
        let total = 0;
        for (const item of product) {
            total += Number(item.price);
        }
        return total;
    };

    const deleteProduct =(id)=>{

        axios.delete('http://localhost:3000/productcart/'+id)
          .then(ans => {
            console.log(ans)
          })
          .catch(err => console.log(err))
          
      }
   
    return (
        <div className='container' style={{ display: 'flex', justifyContent: 'space-between',padding:"5px",columnGap:"10px"}}>
            <div className='cart-container' >
                <h2>My Cart</h2>
                {product.length== 0 && <h1>no cart found</h1>}
                {product.length >0 && product.map((item, index) => (
                    <div className='row' style={{columnGap:"100px",border:"2px solid black", width:"95%",padding:"10px", margin:"10px"}} >
                        <div  style={{height:"300px",width:"300px" ,padding:"30px"}} className='col-md-4'>
                        <img src={item.url} alt={item.title} className="card-img-top"  />
                        
                        </div>
                        <div className='col-md-2'>
                        <h5>{item.title}</h5>
                        <h5>Price: {item.price} Rs</h5>
                        </div>
                        
                        <button type='button' onClick={()=> deleteProduct(item._id)}  className='btns'>Delete</button>
                        
                    </div>
                ))}
            </div>&nbsp;&nbsp;
            <div className='table-container' style={{ width: '50%' }}>
                <table className="table" style={{ border: '2px solid black' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.price} Rs</td>
                            </tr>
                        ))}
                        <tr>
                            <th>Total</th>
                            <th>{calculateTotal()} Rs</th>
                        </tr>
                        
                    </tbody>
                </table>
                <button className='btn btn-primary col-5 fs-5 '>Place Order</button>
            </div>
        </div>
    );
};

export default MyCart;
