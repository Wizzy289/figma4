import { 
MDBIcon,
MDBBtn } from "mdb-react-ui-kit";
const Header = () => {
    return ( 
        <div style={{height: "200px", backgroundColor: 'white', display:'flex'}} className="square border border-top-end-start-0 font-link">
               <div style={{marginTop:'40px'}}>
                <h2 className={'mx-5 mt-5'}>
                BastiUi • Zeld'App (Zelda BOTW / TOTK iPhone App)
                </h2>
                <h6 className="mx-5 mt-3">
                <MDBIcon fas icon="american-sign-language-interpreting" /> By Basti Ui | Used by 521 people
                </h6>
                </div>
                <div style={{textAlign:'end', marginTop:'120px'}}>
                <MDBBtn outline className='mx-2' color='secondary'>
                <MDBIcon far icon="heart" /> 54
                </MDBBtn>
                <MDBBtn className='me-3'>
                    Open in Figma
                 </MDBBtn>
                </div>

        </div>
     );
}
 
export default Header;