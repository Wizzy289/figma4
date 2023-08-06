
const Navbar = () => {
    return ( 
        <>
        <div fixed='top' className="font-link" style={{width:'100%', height:'60px', display:'flex', alignItems:'center', fixed:'sticky'}}>
            <div style={{flex:'3', marginLeft:'40px'}}>
                <ul style={{listStyle:'none',  display:'flex'}}>
                    <a href="#" style={{color:'#111B47'}}><li>Home</li></a>
                    <a href="#" style={{color:'#111B47', marginLeft:'20px'}}><li>About</li></a>
                    <a href="#" style={{color:'#111B47', marginLeft:'20px'}}><li>Contact</li></a>
                </ul>
            </div>
            <div style={{flex:'6', marginLeft:'271px'}}>
            <a href="#"><h3 style={{fontWeight:'bold', color:'#111B47'}}>Landing</h3></a>
            </div>
            <div style={{flex:'3'}}>
                <a href="#"><div style={{backgroundColor:'#111B47', width:'160px', height:'18px',
fontSize: '12px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: '18px', textAlign:'center', color:'white'}}>Buy now</div></a>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;