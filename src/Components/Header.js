import hero from './Group.png'
import './Header.css'
const Header = () => {
    return ( 
        <div style={{ backgroundColor: 'white', height:'800px', width:'100%'}} className="header">
               <div><p style={{fontSize:'45px', color:'#111B47', fontWeight:'bold', marginTop:'150px', marginLeft:'120px'}}>
                Introduce Your Product <br />
                Quickly & Effectively
               </p>
               <p style={{fontSize:'18px', width:'539px', marginTop:'10px', marginLeft:'120px'}}>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
               </p>
               <div style={{display:'flex'}}>
               <div style={{marginLeft:'120px'}}>
                <a href="#"><div style={{backgroundColor:'#111B47', width:'189px', height:'36px',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '500',
 textAlign:'center', color:'white', alignItems:'center'}}>Learn More</div></a>
            </div>
            <div className='het' style={{marginLeft:'20px'}}>
                <a href="#"><div style={{backgroundColor:'#ffff', width:'189px', height:'36px',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '500',
 textAlign:'center', color:'#111B47', alignItems:'center'}}>Purchase Kit</div></a>
            </div>

            </div>
               </div>
        </div>
     );
}
 
export default Header;