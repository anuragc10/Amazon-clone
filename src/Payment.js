import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link,useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();
    // payment card--starts here
    const stripe = useStripe();
    const elements= useElements();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [succeeded,setSucceeded]= useState(false);
    const [processing,setProcessing]=useState("");
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(()=>{
        const getClientSecret= async()=>{
            const response = await axios({
                method: "post",
                url:`/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')

        })
    }

    const handleChange=event=>{
        //listen for changes in the card element
        //and display any errors as the customer types their card details.
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "")
    }
    //payment card--ends here

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* payment address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>ADDRESS_USER eg. 123456</p>
                        <p>Los Angeles,CA</p>
                    </div>
                </div>
            </div>


            {/* review item */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {/* products in the basket */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating={item.rating}
                        />
                    ))}
                </div> 
            </div>


            {/* payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    
                    <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText={(value)=>(
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeperator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled ||succeeded}>
                            <span>{processing ? <p>Processing</p>:
                            "Buy Now"}</span>
                        </button>
                    </div>
                    {/* errors */}
                    {error && <div>{error}</div>}
                    </form>
                </div>
            
            </div>
        </div>
    )
}

export default Payment;
