import React, { useState } from 'react'
import '../components/CSS/ProductNotFound.css'
import { useNavigate } from 'react-router-dom'

const ProductNotFound = () => {
  const history = useNavigate();
  const [preq, setreq] = useState({
    name: "",
    pName: "",
    pDesc: "",
    phone: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setreq({
      ...preq,
      [name]: value,
    });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, pName, pDesc, phone } = preq;
    const res = await fetch("http://localhost:5000/api/auth/productNotFound", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, pName, pDesc, phone
      })
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Some error occurred");
      console.log("Some error occurred");
    }
    else {
      window.alert("Request Sent");
      console.log("Request Sent");

      history("/product");
    }
  }

  return (
    <div className='content'>
      <div className='productnotfound'>
        <h1>Sorry, we Couldn't find your product. Please specify the details here</h1>
      </div>

      <div className="loginSignup-container">
        <p className="loginSignup-login">We will contact you as soon as product is made available</p>
        <div className="loginSignup-fields">
          <input type="text"
            name='name'
            placeholder='Enter Name'
            value={preq.name}
            onChange={handleInput} />

          <input type="text"
            name='pName'
            placeholder='Product Name'
            value={preq.pName}
            onChange={handleInput} />

          <input type="text"
            name='pDesc'
            placeholder='Product Description'
            value={preq.pDesc}
            onChange={handleInput} />

          <input type="number"
            name='phone'
            placeholder='Mobile Number'
            value={preq.phone}
            onChange={handleInput} />
        </div>
        <button type='submit' onClick={PostData}>Submit</button>
      </div>
    </div>
  )
}

export default ProductNotFound