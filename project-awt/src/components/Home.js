import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Data from "./Data.json";
import Data2 from "./Data2.json";
import axios from 'axios';
import './Home.css'
import img1 from './kimetsu.png';
import img2 from './yoriichi.png';
import intro from './intro.mp4';
import { useParams } from "react-router-dom"


const Home = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([])
    const [product2, setProduct2] = useState([])
    const { id } = useParams()

    const handleSubmit = (id) => {


        axios.post('http://localhost:3000/addtocart/' + id)
            .then(ans => {
                console.log(ans)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {

        //display
        axios.get('http://localhost:3000/productsword')
            .then(ans => {
                setProduct(ans.data)
                console.log(ans)
            })
            .catch(err => console.log(err))
    })
    useEffect(() => {

        //display
        axios.get('http://localhost:3000/productpistol')
            .then(ans => {
                setProduct2(ans.data)
                console.log(ans)
            })
            .catch(err => console.log(err))
    })

    const AddtoCart = (index) => {
        const selectedItem = Data[index];
        props.onAddToCart(selectedItem);
        alert(selectedItem.title + " added to cart");
        if (window.confirm("You want to go to cart page?")) {
            navigate('/cart');
        }
    };

    const AddtoCart2 = (index) => {
        const selectedItem = Data2[index];
        props.onAddToCart(selectedItem);
        alert(selectedItem.title + " added to cart");
        if (window.confirm("You want to go to cart page?")) {
            navigate('/cart');
        }
    };


    return (
        <>

            <div height="300px" width="100%" className='intro index-video-wrapper' style={{ zIndex: "-1" }}>
                <video width="100%" height="100%" loop muted autoPlay="autoplay"  >
                    <source src={intro} type="video/mp4" />
                </video>
            </div>
            <div style={{ position: 'absolute', top: '100px', zIndex: '100' }} className='welcome-outer'>
                <div className='welcome'>
                    <h2>Welcome</h2>
                </div>
                <div className='welcome-2'>
                    <h2>Let The Game Begin <br />Login and Became a<br /> part of the Battel</h2>
                    <Link to="/login">
                        <button type="button" >Be The Worrier</button>
                    </Link>
                    <p></p>
                </div>
            </div>
            <div className='heading '  >
                Swords
            </div>
            <div height="100%" width="100%">
                <div className='container-fluid row d-flex col-gap-2' >
                    <div className='row col-10 justify-content-center part-1'>
                        {product.map((item, index) => (

                            <div className='col'>
                                <div key={index} className=" mb-3 ">
                                    <div className="card ">
                                        <Link to={`./productDetails/${item._id}`}>
                                            <div height="30vh" width="30%">
                                                <img src={item.url} alt={item.title} className="card-img-top" />
                                            </div>
                                        </Link>
                                        <h4 className="card-title">{item.title}</h4>
                                        <div className="card-body">
                                            <p className="card-text">Price: {item.price} Rs</p>
                                            <p className="cardtext">Count: {item.count} left</p>
                                            <button className='btn btn-warning add' onClick={() => handleSubmit(item._id)}>
                                                Add
                                            </button>
                                            {/* <Link to={`/cart/${item._id}`}>
                                            <button className='btn btn-warning add'>
                                                Add
                                            </button>
                                             </Link> */}

                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))}

                    </div>
                    <div className='row col justify-content-center part-1 '>
                        <img src={img1} alt='no ' />
                    </div>

                </div>
                <div className='heading '  >
                    Pistol
                </div>
                <div className='container-fluid row'>
                    <div className='row col justify-content-center part-1 '>
                        <img src={img2} alt='no ' />
                    </div>

                    <div className='col-10 row  justify-content-center part-1'>
                        {product2.map((item, index) => (
                            <div className='col'>
                                <div key={index} className="mb-3 ">
                                    <div className="card h-10">
                                        <Link to={`./productDetails/${item._id}`}>
                                            <div height="30vh" width="30%">
                                                <img src={item.url} alt={item.title} className="card-img-top" />
                                            </div>
                                        </Link>
                                        <h4 className="card-title">{item.title}</h4>
                                        <div className="card-body">
                                            <p className="card-text">Price: {item.price} Rs</p>
                                            <p className="cardtext">Count: {item.count} left</p>

                                            <button className='btn btn-warning add' onClick={() => handleSubmit(item._id)}>
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div>
                

                </div>
            </div>
        </>
    );
};

export default Home;
