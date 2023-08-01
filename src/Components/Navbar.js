import React , {useState} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInput,
  MDBBtn,
  MDBNavbarToggler,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Navbar() {
 const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar white bgColor='white'  expand='lg' fixed='top' className='font-link ms-auto' >
        
           <MDBNavbarBrand href='#' className='ms-5'>
            
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACBCAMAAAABte9XAAAA/1BMVEX///8A/xn/OTmtAP//gYEA0f8A/wD/g4P/NTX/ZWX/OTapAP/3NFKsA/wAz///f3+bXN+n/6vbp///jo4A1v//e3v/dnb/Li7/WFhc2f//nJz/19f/zMz/JCT/9fX/4+P/Cgr/6+voh46/7//w2/+Z5v/T9P+y7P9mjf/Q/9Js/3C8/7+i/6W1/7jY/9lV/1f/urr/Skr/qan/GBj/bm7/rKH/j4P6aHb1i47bsv/Dc/+zOv+vI/+H5P25Rf934P/ivP/k+f/79P/BZ//s0//oyf+8U//TmP7Gpv+al/9+kP/05v/Mhv7FXP+rXO/Rt/D0//N9/4Ax/zXp/+qN/455/C0sAAAEGUlEQVRogd3YaVPaUBQG4FiyoNRQQVBARWWruATRtooiYvdaW0X//2/pTaKQhCznPYFMx/eTOiPPnLueiyS5slEurr+JSHpRk0Oi5cudihSYjdPtzbX0UkxElrOFYrHs71SON9NRn09DLKiYr04b8gmNICIm0/UQW8drRIKMyHJB23IaO2vUMhBETI5D2UIMAHEpx4iBIHJWezE0+nygiFx4nv3KCWRgiFysMgYLRbJ5a5+DhYCIXcopWAiKZMsC2QYNFJGLYrQ2545UpDK2fhlIoSMV0CmBETEp63NH5LyEEgxESwKRXw2iJTPxCSzhbjKbMZFjZf4H5Kk4hQvoeKFHfZdx+7IuLXgRc65fqQrOCthI7NjtSn6eLVEngeYuP2lT0/NqU2VnM7wEjBjQcLvb+q11+sYnI8W8yxApb8/8EdSRplI9PaGNGfE5V96ZNkxGS5+YL9OIrC3K2fAUitmuP2F3+B8+Lr6Nyqe8N2e7u7tnL7+Uux2fN+kk9fPexeVyVHKu/6n1V1cVM6ulRi3sw+2cX2UymVRkMg6kOVB0xZn+MJS4viAAbmQ40N2EIsh+MHHzmUg4kJbiJWwmaNDql2RjjAz8CItp+BpfyMIEKQUZQvEbsjpiPCOBdQTVcokjjTBDKC2vQZ/zMdIMN0Q8S/krZlhIFKEopTiDZSGtyEIUvRanEBOJLsRTyjccqUUXorhm5QY1BDKgGM5lfM1AVimIc7y+w0jqB8lQdMcmgY3UT1olenOMXODILyIyWcS4kXpPRFqvEFlOArnCEXzie/g+IS5hx7mSw3c8vhnhQ5hzrEgMpE85hV03MDwpmdyQhDgv4Drj0ioRjIHkDHprCYRwa+nuTuKW0UhEluIpBL5STCR6ViRvsAGzmruIAXPcJS+5ob4aJkh4C6n7NfaQ8txwhyi+hsgd/nQI7vCmx2o8+1Rm/Ahq+r4e9FLIi+62R2Qcb8bG1FtLV6b6eQ/z+yJjh4qIMSsp43ej+KFEeP/e1HO9Oyt/3gXnr+t/hrV+ycqgUQt/+jpzv3dgGKMFNTAr5I8KytHDSHzOQkhiI3tGODAD5LEdTcRF9hcIREzkiUTEQ9pEIw5CNmIgD2SDj6zQDTbyCBhsxEgA2UcMLoIQXAQrhIlAM8JEoKXFRQ6SQMDR4iGgwULuk0D2kkDAXcJDDpNAkFP+/64kkTk5gpFDHMH3CW6gt4kIB6E3Q3YhDxwEXF7qPgcBT0jWlIDjpbZ5CLSI1SMeglxbqsE0kFLYhQDtNm/92rknV8I3yNdjjMEyQ7pVOEejK4TuSz2IaRCUGRjm7RXGqMwzy5vHkE2pGo8zMSRz+v2ZWXxp48jB9Lc34i+zmA1XDg3r+6aXz1fV9mwmw5u9lae2MRqNjPbTSrztZ+cfGAS3iwqMtQ0AAAAASUVORK5CYII='
              height='20'
              width={15}
              alt=''
              loading='lazy'
            />
            
            </MDBNavbarBrand> 
            <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02, #navbarCenteredExample'
            aria-controls='navbarColor02, navbarCenteredExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => {
              setShowNavColorSecond(!showNavColorSecond);
              setShowNavCentred(!showNavCentred)
            }}
            
          >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBContainer  className="mx-auto" style={{textAlign:'center', display:'flex'}}> 
            
        <div style={{display:'flex'}}>
            <img 
                className='ms-4'
                src="data:image/png;base64,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" 
                alt="" 
                height={20}
                padding='200' style={{marginTop:'5px'}}/>

                <h6 style={{fontSize: '12px', marginLeft:'10px'}} className='mt-2'>Community</h6>
                </div>   

                <div style={{width:'400px', backgroundColor:'#EAD3D5',borderRadius:'10px'}}>
                <MDBInput label='Search for resources like "portfolio" ' 
                id='formControlSm' type='search' className='w-100'           
                style={{width:'10px', borderRadius:'10px'}}/>
                </div>

                <div style={{alignContent:'end', display:'flex', marginRight:'5px'}}>
             <MDBBtn color='light' rippleColor='dark' >
        Log in
      </MDBBtn>
      <MDBBtn outline className='mx-2' color='dark'>
        Sign up
      </MDBBtn>
      </div>
      
          
      </MDBContainer>
      </MDBNavbar>
    </>
  );
} 