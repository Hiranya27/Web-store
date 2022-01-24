import React from 'react';
import './Home.css';
import Bg1 from "../../images/Bg1.jpg";
import Product from '../../Components/product/Product';

const Home = () => {

  const productDetails1 = [{title:"Havit RGB Headphones Stand with 3.5mm AUX and 2 USB Ports, Headphone Holder for Gamers Gaming PC ", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51jCJlRhdeL.__AC_SY445_SX342_QL70_FMwebp_.jpg", rating:5},
                          {title:"Gamenote RGB Headphone Stand & Power Strip 2 in 1 Desk Gaming Headset ", price:7.99, image:"https://m.media-amazon.com/images/I/61UNJ6ota7L._AC_SL1425_.jpg", rating:2},
                          ]

  const productDetails2 = [{title:"PHILIPS Wired Gaming Keyboard and Mouse Combo RGB Backlit", price:2.99, image:"https://m.media-amazon.com/images/I/81sNSCVQQWL._AC_SL1500_.jpg", rating:5},
  {title:"ZUUKOO LIGHT Smart LED Light Bar, RGB Smart LED Lamp", price:3.29, image:"https://m.media-amazon.com/images/I/61JeMrjdBvL._AC_SL1500_.jpg", rating:5},
  {title:"The startup", price:9.89, image:"https://images-na.ssl-images-amazon.com/images/I/51jCJlRhdeL.__AC_SY445_SX342_QL70_FMwebp_.jpg", rating:5}]

  const productDetails3= [{title:"12 Phone Screen Magnifier with Bluetooth Speakers 3D HD Magnifying Projector", price:29.01, image:"https://m.media-amazon.com/images/I/71gzgBX3kxL._AC_SL1500_.jpg", rating:5}]
  return (
    <div className='home'>
      <div className="home_container">
          <img className='home_image' src={Bg1} alt="" />
      </div>
      <div className="home_row">
        {
          productDetails1.map((product) => {
            return (
              <Product title={product.title} price={product.price} image={product.image} rating={product.rating}/>
            )
          })
        }
        
        
        
      </div>
      <div className="home_row">
        {productDetails2.map((product) => {
          return( <Product title={product.title} price={product.price} image={product.image} rating={product.rating}/>)
        })}
     
        
      </div>
      <div className="home_row">
      {productDetails3.map((product) => {
          return( <Product title={product.title} price={product.price} image={product.image} rating={product.rating}/>)
        })}
     
        
      </div>
    </div>
  )
}

export default Home
