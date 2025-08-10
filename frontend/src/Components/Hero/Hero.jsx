import React from 'react'
import './Hero.css';
import personImage from '../../assets/person.png'; // Assuming you have an image for the hero section
import image6 from '../../assets/image 6.png'; // Assuming you have another image for the hero section
import mapImage from '../../assets/map.png'; // Assuming you have a map image for the hero section
import image5 from '../../assets/image 5.png'; // Assuming you have another image for the hero section
import image3 from '../../assets/image 3.png'; // Assuming you have another image for the hero section
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>Helping Reunite<br /> 
                Missing Persons
</h1>
            <p>Report missing persons, find loved ones,<br /> 
and join a community that cares.</p>
<img src={mapImage} alt="Hero Image" className='img-person' />
<img src={personImage} alt="Hero Image" className='map-img' />
 <div className="button-group">
  <button className='btn1'>
    <img src={image6} alt="Hero Image" className='hero-image1' style={{ verticalAlign: 'middle', marginRight: '8px' }}/><span style={{ position: 'relative', top: '-3px' }}>  Report Missing
  </span></button>
  <button className='btn2'>
    <img src={image5} alt="Hero Image" className='hero-image2' style={{ verticalAlign: 'middle', marginRight: '8px' }}/> <span style={{ position: 'relative', top: '-3px' }}>Post Found</span>
  </button>
  <button className='btn3'>
    <img src={image3} alt="Hero Image" className='hero-image3' style={{ verticalAlign: 'middle', marginRight: '8px' }}/>  <span style={{ position: 'relative', top: '-3px' }}>Search Database</span> 
  </button>
</div>
        </div>          
    </div>
  )
}

export default Hero