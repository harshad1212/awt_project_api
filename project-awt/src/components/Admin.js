import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css';
import intro from './loginback.webm';
import axios from 'axios';



const Admin = () => {
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [url, setUrl] = useState()
  const [count, setCount] = useState()
  const [category, setCategory] = useState()
  const [product, setProduct] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    //add
    axios.post('http://localhost:3000/product', { title, price, description, url,count,category })
      .then(ans => {
        console.log(ans)
      })
      .catch(err => console.log(err))

  }
  const deleteProduct =(id)=>{

    axios.delete('http://localhost:3000/product/'+id)
      .then(ans => {
        console.log(ans)
      })
      .catch(err => console.log(err))

  }
  useEffect(() => {

    //display
    axios.get('http://localhost:3000/product')
      .then(ans => {setProduct(ans.data)
        console.log(ans)
  })
      .catch(err => console.log(err))
  })
  return (
    <div>
      <div height="300px" width="100%" className='intro index-video-wrapper' style={{ zIndex: "-1" }}>
        <video width="100%" height="100%" loop muted autoPlay="autoplay"  >
          <source src={intro} type="video/webm" />
        </video>
      </div>
      <section style={{ position: 'absolute', top: '100px', zIndex: '100' }}>
        <div class="form-box">
          <div class="form-value">
            <form onSubmit={handleSubmit}>
              <h2>Admin</h2>
              <div class="inputbox">
                <input type="text" required
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
                <label for="">Title</label>
              </div>
              <div class="inputbox">
                <input type="text" required
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                />
                <label for="">Price</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
                <label for="">Discripsion</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  onChange={(e) => {
                    setUrl(e.target.value)
                  }}
                />
                <label for="">Enter Image Path</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  onChange={(e) => {
                    setCount(e.target.value)
                  }}
                />
                <label for="">Quntity of Product</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                />
                <label for="">Category</label>
              </div>
              <button type='submit'>ADD</button>
            </form>
          </div>
        </div>
      </section>
      <div>
        <table>
          <tr>
            <th>Title</th>
            <th>price</th>
            <th>Count</th>
            <th>image path</th>
            <th>Category</th>
            <th>Discripsion</th>
            <th> Delete/usepdate</th>
          </tr>
          {
            product.map((ele,index) => {
              return (
                <tr >
                  <td >{ele.title}</td>
                  <td>{ele.price}</td>
                  <td>{ele.count}</td>
                  <td><img src={ele.url} className='image' /></td>
                  <td>{ele.category}</td>
                  <td>{ele.description}</td>
                  <td>
                    <Link to={`/Update/${ele._id}`}>
                          <button type='buttton ' className='btns'>Update</button>
                    </Link>
                  <button type='button' onClick={()=> deleteProduct(ele._id)} className='btns'>Delete</button>
                  </td>
                </tr>

              )
            })
          }
        </table>
      </div>
    </div>

  )
}

export default Admin

