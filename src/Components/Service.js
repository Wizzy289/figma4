import './Service.css'
import destination1 from './destination1.png'
import booking2 from './booking2.png'

export default function Service() {
  return (
    <div className='wrapper3'>
        <div className="texts">
            <h3>S E R V I C E S</h3>
            <h1>
                Our top value <br />
                categories for you
            </h1>
        </div>

        <div className="boxes">
            <div className="box1">
                <img src={destination1} alt="" />

                <h4>Best Tour Guide</h4>
                <h6>What looked like a small <br /> patch of purple grass <br /> above five feet</h6>
            </div>
            <div className="box1 box2">
                <img src={booking2} alt="" />
                <h4>Easy Booking</h4>
                <h6>What looked like a small <br /> patch of purple grass <br /> above five feet</h6>
            </div>
        </div>
    </div>
  )
}
