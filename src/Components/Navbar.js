import './Navbar.css'
import logo from './icon.png'
import menu from './menu.png'

export default function Navbar() {
  return (
    <>
    <div className='wrapper1'>
        <img src={logo} alt="" className='logo' />

        <ul>
          <a href=""><li>Home</li></a>
          <a href=""><li>Discover</li></a>
          <a href=""><li>Special Deals</li></a>
          <a href=""><li>Contact</li></a>
        </ul>

        <div className='logs'>
        <div className="log"><a href=""><h6>Log In</h6></a></div>
        <button className='btn'>Sign Up</button>

        <div className="menu">
          <img src={menu} alt=""/>
        </div>

        
        </div>
        
    </div>

<div className="menucon">
<ul className="menuitems">
          <a href=""><li>Home</li></a>
          <a href=""><li>Discover</li></a>
          <a href=""><li>Special Deals</li></a>
          <a href=""><li>Contact</li></a>
        </ul>
</div>
</>

  )
}
