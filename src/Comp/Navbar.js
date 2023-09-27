import React, { useState } from 'react'
import './Navbar.css'
import jessica from '../images/jessicapng.png'
import arrow from '../images/arrow.png'
import truck from '../images/Vector.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import hamburger from '../images/hamburger.png'

function Navbar() {

    const [toggle, settoggle] = useState(false);
    const [producttoggle,setproducttoggle]=useState(false);
    const[producttoggledesktop,setproducttoggledesktop]=useState(false);

    return (
        <div className='navmain'>
            <div className='uppertop'>
                    <div className='topleft'>
                        <p>
                            <span style={{ paddingRight: '0px' }}><img src={truck} /></span>
                            Free Delivery</p>
                        <p className='return'>Return Policy</p>
                    </div>
                    <div className='topright'>
                        <p>Login</p>
                        <p>
                            <img src={fb} style={{ width: '8px' }} />
                        </p>
                        <p><img src={linkedin} style={{ width: '8px' }} /></p>
                        <p><img src={twitter} style={{ width: '8px' }} /></p>
                        <p><img src={ig} style={{ width: '8px' }} /></p>

                    </div>

                </div>
            <div className='navnavbar'>
                
                <div className='navheading'>
                    <div>
                        <h1> Shopkart</h1>
                    </div>
                    <div className='navright'>
                        <div className='navrighticons'>
                            <h3>Wishlist (0)</h3>
                        </div>
                        <div className='navrighticons'>
                            <h3>Bag (0)</h3>
                        </div>

                    </div>
                    <div className='hamburgersign' onClick={() => settoggle(!toggle)}>
                        <img src={hamburger}/>
                    </div>
                </div>
                {toggle ?
                    <div className='navnavlistmobile'>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li id='nestedmobilelist' onClick={()=>setproducttoggle(!producttoggle)}>OUR PRODUCTS
                            {producttoggle? 
                            <div id='nestedoductlistmobile'>
                                <li>Product 1</li>
                                <li>Product 2</li>
                                <li>Product 3</li>
                            </div>
                            :<></>}
                            </li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                    : <></>}
                <div className='navnavlist'>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li style={{ display: 'flex', flexDirection: 'column' }} id='nestedproduct' onClick={()=>setproducttoggledesktop(!producttoggledesktop)}>OUR PRODUCTS
                            {producttoggledesktop?
                            <div id='nestedoductlist'>
                                <li>Product 1</li>
                                <li>Product 2</li>
                                <li>Product 3</li>
                            </div>:<></>
                            }
                        </li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div className='navad'>
                    <div className='navadwithhead'>

                        <h1 className='firstheading'>Fresh </h1>
                        <h1 className='secondheading'>2022 </h1>
                        <h1 className='thirdheading'>Look </h1>
                    </div>
                    <div className='navorangeback'>
                        <div className='orangecolor'></div>
                    </div>
                    
                </div>
                
                    
                
            <div className='navfooter'>
                    <h1>See more
                        <span style={{ marginLeft: '5px' }}>
                            <img src={arrow} />
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar