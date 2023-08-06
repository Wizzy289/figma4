import './Rect.css'
const Rect = () => {
    return ( 
        <div className='rect' style={{ height:'680px', width:'100%', textAlign:'center'}}>
            
            <div style={{ marginTop:'150px',  margin:'0 auto'}}>
        <p style={{fontSize:'45px', color:'#111B47', fontWeight:'bold'}}>
        A Price To Suit Everyone
       </p>
       <p style={{fontSize:'18px', width:'539px', marginTop:'10px'}}>
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
       </p>
       <br /> 
       <div style={{textAlign:'center'}}>
       <p style={{fontSize:'60px', color:'#111B47', fontWeight:'bold'}}>
        $40
        <p style={{fontSize:'18px', width:'539px'}}>
       UI Design Kit
       </p>
       </p>
        </div>  
        <br />
        <div>
        <p style={{fontSize:'18px', width:'539px'}}>
       See, One Price, Simple.
       </p>
       
            </div>
             
        </div>
        </div>
        
     );
}
 
export default Rect;