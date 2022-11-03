import React from 'react'
import '../../../src/infostyle.css'
import Facerecog from '../Info/student.svg'
function Front() {
  return (
    <section class="section" id="services">
    <div class="par">
    <p class="sectag1 textbig ">Experience Next-Generation Online Classes</p>
       </div>
         <div class="thumbnail">
             <img src={Facerecog} class="imageflid1" alt='Facerecog'/>
    </div>

</section>
  )
}
export default Front;