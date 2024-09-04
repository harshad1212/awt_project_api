import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom"


const ProductDetails = () => {
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setdescription] = useState()
    const [url, setUrl] = useState('')
    const [count, setCount] = useState()
    

    useEffect(() => {
        
        axios.get('http://localhost:3000/product/'+id)
          .then(ans => {
            console.log(ans)
            setTitle(ans.data.title)
            setCount(ans.data.count)
            setdescription(ans.data.description)
            setUrl(ans.data.url)
            setPrice(ans.data.price)
    
            console.log(url)
          }
          )
          .catch(err => console.log(err))
      }, [])
      function increment() {
        
        setCount(count + 1);
      }
      function decrement() {
        if (count <= 1) return;
        setCount(count - 1);
      }

  return (
    <div>
      <div className="container text-white w-100" style={{ background: "rgb(27, 26, 26)", }}>
      <div className="heading-section">
        <h2>Product Details</h2>
      </div>
      {/* slide bar */}
      <div className="row mt-0">
        <div className="col-md-6">
          <div id="slider" className="owl-carousel product-slider">
            {/* Images */}
          </div>
          <div id="thumb" className="owl-carousel product-thumb " >
            <img src={'/'+url}  style={{height:240,margin :50}} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{title}</div>
              <div className="reviews-counter">
                {/* Ratings */}
                <span>3 Reviews</span>
              </div>
              <div className="product-price-discount">
                <span>₹{new Intl.NumberFormat().format(price)}</span>
              </div>
            </div>
            <p>
                {description}
            </p>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="ram">Category</label><br />
                <div>sword</div>
              </div>
              
            </div>
            {/* Quantity */}
            <div className="product-count">
              <label htmlFor="size">Quantity</label>
              <form action="#" className="d-flex gap-2 my-3">
                <div className="qtyminus" onClick={decrement}>-</div>
                <input type="text" name="quantity" value={count} className="qty" />
                <div className="qtyplus" onClick={increment}>+</div>
              </form>
              <button  className="btn px-3 mx-2" style={{ height: 'auto', width: 'auto', fontSize: '22px',background: '#111' }} type="button">Add to Cart</button>
              <button className="btn px-5" style={{ height: 'auto', width: 'auto', fontSize: '22px', background: '#111' }} type="button">Buy</button>
            </div>
          </div>
        </div>
      </div>
      {/* slide bar end */}
      <div className="row mt-3">
        <div className="col">
          <div className="panel-group" id="accordion">
            {/* Specification */}
            <div className="panel panel-default pt-3 border-top m-4">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <Link style={{ textDecoration: 'none', color: 'white' }} data-toggle="collapse" data-parent="#accordion" to="#collapse1">
                    SPECIFICATION
                  </Link>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse  in mt-5">
                <div className="panel-body">
                  <table className="table border-top table-borderless rounded-2 text text-white">
                    <tr>
                      <th style={{ fontSize: '20px', bordeTop: '1px solid' }}>MANUFATURER DETAILS</th>
                    </tr>
                    <tr>
                      <td> Brand<br />compains </td>
                      <td> Model Series <br /> WPTREND </td>
                      <td> Model Number <br /> Ckjdad </td>
                    </tr>
                   
                    <tr>
                      <td> Blade Size in Inches <br />32 Inches</td>
                      <td> material Type<br /> Metal </td>
                      <td> Handel Type<br /> Brace </td>
                    </tr>
                    
                  </table>
                </div>
              </div>
            </div>
            {/* Overview */}
            <div className="panel panel-default border-top pt-3 m-4">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a style={{ textDecoration: 'none', color: 'white' }} data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                    OVERVIEW
                  </a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse border rounded mb-4">
                <div class="panel-body m-4">
                  <p>Why buy This sword</p>
                  <ul>
                    <li>This sword is made of rare material with  strong handale of brass</li>
                    <li>{description}</li>
                    <li>Control your TV and smart home devices rffortlessly with Built-in Alexa and
                      ThinQ AI Technology</li>
                    <li>Enjoy fluid and blur-free motion with the Experience Stabilisation Engine and
                      MEMC Technology</li>
                  </ul>
                  <p>The Compaq HUEQ A 109 cm (43 inch) 4K Ultra HD LED WebOS TV with Dolby Audio is
                    loaded with features and provides an immersive viewing experience. Every image is
                    exhibited with breathtaking clarity and bright colors on a 43-inch screen with a 4K
                    Ultra HD resolution. Navigate your TV effortlessly with the Magic Remote, featuring
                    one-touch access and universal control. With WebOS as the operating system, you'll
                    enjoy a seamless and user-friendly interface, making it easy to access your favorite
                    apps like Netflix, Prime Video, Disney Plus Hotstar, and YouTube. Dive into a world
                    of unlimited content and entertainment with just a click. The built-in Wi-Fi of
                    Compaq HUEQ A 109 cm (43 inch) 4K Ultra HD LED WebOS TV with Dolby Audio enables you
                    to easily connect to the internet and watch your </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      </div>
    </div>
    </div>
  )
}

export default ProductDetails
