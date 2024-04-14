/* eslint-disable react/no-unescaped-entities */
import "./newArrival.css"
import poster1 from "../../assets/poster-1.png"
import poster2 from "../../assets/poster-2.png"
import poster3 from "../../assets/manphoto1.png"
const NewArrival = () => {
  return (
    <section className="section new-arrival">
      <div className="title">
        <span>NEW ARRIVAL</span>
        <h2>Latest Collection</h2>
      </div>

      <div className="row container">
        <div className="col col-1 speical-1">
          <img src={poster1} alt="" />
          <h3>
            2024 Trends <br />
            Women’s Smart Skirt
          </h3>
        </div>
        <div className="col col-2 speical-2">
          <img src={poster2} alt="" />
          <h3>
            2024 Trends <br />
            Women’s Smart shirt
          </h3>
        </div>
        <div className="col col-3 speical">
          <img src={poster3} alt="" />
          <h3>
            2024 Trends <br />
            Men's Smart clothes <br />
            <span>Discover More:</span>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default NewArrival