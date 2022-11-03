import React from 'react'
import '../Features/features.css'
import Facerecog from '../Info/mental.svg'
import imbeside from '../Info/imbeside.png'
import snap from '../Info/snap.svg'
export default function Features() {
  return (
    <div className='feat'>
    <div class="sectag">
    
    <h1 className='textbigg'>Features</h1>
    <section class="section" id="services">
          <div class="par">
         

          <p class="secsub textbig">
          <br/>
          <br/>
          Detect Interaction of students Using<br/> facial expression.
          </p>
              <br/>

             </div>
               <div class="thumbnail">
                   <img src={imbeside} class="imageflid1" alt='imbeeside'/>
          </div>

      </section>
      <section class="section">
      <div >
     
      <div >
      <img src={Facerecog} class="imageflid2" alt='Facerecognition'/>
</div>
      <p class="textbig">
      <br/>
      <br/>
      Take proctored Tests with multiple face detection warnings
      </p>
          <br/>

         </div>
         

  </section>
  <section class="section" id="services">
          <div class="par">
         

          <p class="secsub textbig">
          <br/>
          <br/>
          Take Snapshots of Students for<br/> supervision.
          </p>
              <br/>

             </div>
               <div class="thumbnail">
                   <img src={snap} class="imageflid1" alt='Snap'/>
          </div>

      </section>

      </div>
      </div>
  )
}
