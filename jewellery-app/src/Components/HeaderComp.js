import React from 'react'
import "./HeaderComp.css";
import jlogo from'../Assests/Images/jlogo.jpg';
import coverimg from '../Assests/Images/slider-bg.jpg'

export const HeaderComp = () => {
  return (
    
<div className='page'>
 <div className='nav-items'>
<nav className='items'>
  <ul type='none'>
    <li><a className='a1' href=''>Home</a></li>
    <li><a className='a1' href=''>About</a></li>
    <li><a  className='a1' href=''>Products</a></li>
    <li><a  className='a1' href=''>Contact</a></li>
  </ul>
  </nav>
 <div className='headline'>
  <h1 className='Title'>Best Jewellery <br/> Collection</h1>
  <p className='para'>Discover a world of timeless beauty and sophistication <br/> Our exquisite collection of fine jewellery is designed <br/>to celebrate your unique style and precious moments<br/>Step into a world of opulence with our exclusive jewellery <br/>collection.</p>
 </div>
  </div>

  
    
  
<img className='cimg'src={coverimg}></img>


  
 </div>

   
    

  )
}
