import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" id="grad"
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
                alt="bgimage"/>
                <div className="homr__row">
                    
                    <Product 
                    id="1"
                    title="The Kite Runner,  is the first novel by Afghan-American author Khaled Hosseini."
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81IzbD2IiIL.jpg"
                    rating={4}
                    />
                    {/* prod 2 */}
                    <Product
                    id="2"
                    title="Brief Answers to the Big Questions"
                    price={40.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/41JU-lDfebL._SX310_BO1,204,203,200_.jpg"
                    rating={4}
                    />
                </div>
                <div className="homr__row">
                    {/* prod 1 */}
                    <Product
                    id="3"
                    title="32' Smart TV "
                    price={249.99}
                    image="https://www.lg.com/us/images/tvs/32ln5700/gallery/large07.jpg"
                    rating={4}
                    />
                    {/* prod 2 */}
                    <Product
                    id="4"
                    title="Smart Watch"
                    price={99.99}
                    image="https://5.imimg.com/data5/EB/FW/SM/SELLER-95033654/apple-smart-watch-500x500.jpg"
                    rating={4}
                    />
                    {/* prod 3 */}
                    <Product
                    id="5"
                    title="Glasses"
                    price={12.75}
                    image="https://m.media-amazon.com/images/I/51hC76asL8L._SY450_.jpg"
                    rating={2}
                    />
                </div>
                <div className="homr__row">
                    {/* prod 1 */}
                    <Product
                    id="6"
                    title="Best Alexa Skills 2021, Amazon Echo Dot 4th Generation, Black"
                    price={90.75}
                    image="https://i.pinimg.com/originals/64/5c/fd/645cfdac559fa87372c468e50598ece1.jpg"
                    rating={2}
                    />
                    {/* prod 2 */}
                </div>
            </div>
        </div>
    )
}

export default Home;
