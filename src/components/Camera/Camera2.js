import React from 'react'
import camoff from '../Camera/smallcam.svg'
export default function Camera2(props) {
  return (
    <div className="camera"
    
    >
    <div className='camera_wrapper2'
  
    >
    <p className='camera_wrapper33'>Click To Allow Camera</p>
    <img src={camoff} className='camera_wrapper3'
    onClick={()=>props.setphoto(!props.photo)}
    />
    </div>
    </div> 
  )
}
