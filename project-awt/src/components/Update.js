import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from "react-router-dom"



const Update = () => {
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [description, setdescription] = useState()
  const [url, setUrl] = useState()
  const [count, setCount] = useState()
  const { id } = useParams()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/product/'+id, {title,price,description,url,count})
      .then(ans => {
        console.log(ans)
        Navigate('/Update')
      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    //display
    axios.get('http://localhost:3000/product/'+id)
      .then(ans => {
        console.log(ans)
        setTitle(ans.data.title)
        setCount(ans.data.count)
        setdescription(ans.data.description)
        setUrl(ans.data.url)
        setPrice(ans.data.price)

      }
      )
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <section style={{ position: 'absolute', top: '100px', zIndex: '100' }}>
        <div class="form-box">
          <div class="form-value">
            <form onSubmit={handleSubmit} >
              <h2>Admin</h2>
              <div class="inputbox">
                <input type="text" required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
                <label for="">Title</label>
              </div>
              <div class="inputbox">
                <input type="text" required
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                />
                <label for="">Price</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value)
                  }}
                />
                <label for="">Discripsion</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value)
                  }}
                />
                <label for="">Enter url Path</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" required
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value)
                  }}
                />
                <label for="">Quntity of Product</label>
              </div>
              <button type='submit'>Update</button>
            </form>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Update
