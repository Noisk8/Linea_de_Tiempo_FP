import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Timeline from './Timeline';

const Paralax = () => {
  return (
    
        <ParallaxProvider>
            <div>
        <Parallax y={[-20, 20]} tagOuter="figure">
            <div className='bgimg-1'>
  <Timeline />
            </div>
        </Parallax>
        </div>
        </ParallaxProvider>
  
  )
}

export default Paralax
