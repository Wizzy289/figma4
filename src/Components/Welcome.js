import './Welcome.css'
import icon from './Icon.png'
const Welcome = () => {
    return ( 
        <div className='welcome' style={{height:'742px', width:'100%', backgroundColor: 'white'}}>
             <div><p style={{fontSize:'45px', color:'#111B47', fontWeight:'bold', marginTop:'150px', marginLeft:'120px'}}>
                Light, Fast & Powerful
               </p>
               <p style={{fontSize:'18px', width:'539px', marginTop:'10px', marginLeft:'120px'}}>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
               </p>
               <br /> <br />
               <div style={{display:'flex'}}>
               <div>
                <img src={icon} alt="" style={{marginLeft:'120px'}}/>
                <p style={{fontSize:'12px', width:'250px', marginTop:'10px', marginLeft:'120px'}}>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
               </p>
                </div>
                <div>
                <img src={icon} alt="" style={{marginLeft:'60px'}}/>
                <p style={{fontSize:'12px', width:'250px', marginTop:'10px', marginLeft:'60px'}}>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
               </p>
                </div>
               </div>
               </div>
        </div>
     );
}
 
export default Welcome;