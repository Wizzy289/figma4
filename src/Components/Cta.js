import './Cta.css'
const Cta = () => {
    return ( 
        <div className='cta'  style={{height:'400px', width:'100%', backgroundColor: 'white', display:'flex'}}>
            <div>
        <div>
        <p style={{fontSize:'45px', color:'#111B47', fontWeight:'bold', marginTop:'10px', marginLeft:'700px'}}>
        Light, Fast & Powerful
       </p>
       <p style={{fontSize:'18px', width:'539px', marginTop:'10px', marginLeft:'700px'}}>
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
       </p>
        </div>
        <div style={{marginLeft:'700px', marginTop:'40px'}}>
                <a href="#"><div style={{backgroundColor:'#111B47', width:'189px', height:'36px',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '500',
 textAlign:'center', color:'white', alignItems:'center'}}>Purchase Now</div></a>
            </div>
            </div>
</div>
     );
}
 
export default Cta;