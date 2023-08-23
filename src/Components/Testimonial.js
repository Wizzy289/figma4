import './Testimonial.css'
import Ellipse from './Ellipse.png'
import Frame4 from './Frame4.png'

export default function Testimonial() {
  return (
    <div className='wrapper5'> 
        <h3>T E S T I M O N I A L S</h3>
        <h1>Trust our clients</h1>
            <img src={Ellipse} alt="" />
        <h4><span style={{color:'#FF5722'}}>Mark Smith</span> / Travel Enthusiast</h4>
        <img src={Frame4} alt="" className='inng' />
        <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots <br /> in a piece of classical Latin literature from 45 BC.</h6>
    </div>
  )
}
