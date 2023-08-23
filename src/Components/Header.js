import './Header.css'
import Group from './Group.png'


export default function Header() {
  return (
    <div className='wrapper2'>
        <div className='content'>
            <h1>
                Travel <span style={{color:'#F85E9F'}}>top <br/>
                destination </span> <br/> of the world
            </h1>

            <h6>
                We always make our customers happy by<br/> providing<br/> as many choices as possible 
            </h6>

            <button className='btn'>Get Started</button>
        </div>

        <div className='img'>
            <img src={Group} alt="" />
        </div>

        
    </div>
  )
}
