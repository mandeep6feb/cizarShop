import React from 'react';
import headphone from '../../assets/images/headphone.jpg';
import watch from '../../assets/images/watch.jpg';
import networking from '../../assets/images/networking.jpg';
import boatwatch from '../../assets/images/boatwatch.jpg';
import noise from '../../assets/images/noise.jpg';
import lcd from '../../assets/images/lcd.jpeg';

const Hero = () => {
  return (
    <div className='padding-hero'>
      <div class="card-deck">
        <div class="card">
          <a href='/products'><img src={networking} class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
          </div>
         
        </div>
        <div class="card">
          <a href='/products'><img src={headphone} class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
          </div>
          
        </div>
        <div class="card">
          <a href='/products'><img src={headphone} class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
          </div>
         
        </div>
        <div class="card">
          <a href='/products'><img src={headphone} class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
          </div>
         
        </div>
        <div class="card">
          <a href='/products'> <img src={watch} class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
          </div>
         
        </div>
      </div>
    </div>
  )
}
export default Hero;