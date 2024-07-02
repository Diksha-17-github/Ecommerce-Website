import React, { useState } from 'react';
import '../components/CSS/Checkout.css';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const history = useNavigate();
    const [userord, setUserord] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        city: "",
        state: "",
        pincode: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserord({
            ...userord,
            [name]: value,
        });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, address, phone, city, state, pincode } = userord;
        const res = await fetch("http://localhost:5000/api/auth/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, address, phone, city, state, pincode
            })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid checkout");
            console.log("Invalid checkout");
        } else {
            window.alert("Order placed successfully");
            console.log("Order placed successfully");

            history("/");
        }
    }

    return (
        <div className='checkout'>
            <h1>Checkout</h1>
            <div className="checkout-container">
                <h2>Delivery Details</h2>
                <form method='POST' className="checkout-fields">
                    <div className="combine">
                        <input className='firstElement'
                            type="text"
                            name='name'
                            placeholder='Enter name'
                            id='name'
                            value={userord.name}
                            onChange={handleInput}
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='Enter Email'
                            id='email'
                            value={userord.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="address">
                        <input
                            type="text"
                            name='address'
                            placeholder='Enter Address'
                            id='address'
                            value={userord.address}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="combine">
                        <input className='firstElement'
                            type="text"
                            name='phone'
                            placeholder='Enter Phone'
                            id='phone'
                            value={userord.phone}
                            onChange={handleInput}
                        />
                        <input
                            type="text"
                            name='city'
                            placeholder='Enter City'
                            id='city'
                            value={userord.city}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="combine">
                        <input className='firstElement'
                            type="text"
                            name='state'
                            placeholder='Enter State'
                            id='state'
                            value={userord.state}
                            onChange={handleInput}
                        />
                        <input
                            type="text"
                            name='pincode'
                            placeholder='Enter PinCode'
                            id='pincode'
                            value={userord.pincode}
                            onChange={handleInput}
                        />
                    </div>
                    <button type='submit' onClick={PostData}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
