import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './NewProduct.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function NewProducts() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1300 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1300, min: 700 },
      items: 3.5
    },

    tablet: {
      breakpoint: { max: 700, min: 500 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };
  const [content, setcontent] = useState([])
  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setcontent(data);
    console.log(content);
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log("New Products");
  return (
    <div className='prodmainn'>
      <div className='proheading'>
        <h2>New products</h2>
      </div>
      <div style={{ display: 'flex', width: '100%' }} className='productcarousal'>

        <div className='pronavigation'>
          <ul>
            <li style={{ color: 'black' }}>Apparel</li>
            <li className='liclass'>Accessories</li>
            <li className='liclass'>Best Sellers</li>
            <li className='liclass'>50% off</li>
          </ul>
        </div>
        <div className='productslists'>
          <Carousel responsive={responsive} className='carousalwithitems'>
            {content.map((i) => {
              return (
                <div className='carouselmain'>
                  <div className='carouselimg'>
                    <img src={i.image} />
                  </div>
                  <div className='carouseldetails'>
                    <h1 className='itemtitle'>{i.title}</h1>
                    <p className='itempara'>{i.description.slice(0, 150)}</p>
                    <h1 className='itemprice'>${i.price}</h1>
                  </div>
                </div>
              )
            })
            }
          </Carousel>

        </div>
      </div>

    </div>
  )
}

export default NewProducts