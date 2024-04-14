import "./hero.css"
import heroImg from "../../assets/hero.png"
const Hero = () => {
  return (
    <div className="hero">
        <div className="row container d-flex">
          <div className="col">
            <span className="subtitle">Limited Time Only For Winter</span>
            <h1>fash<span className="i">i</span>on</h1>
            <p>LOOK YOUR BEST ON YOUR BEST DAY</p>

            <button className="btn">Explore Now!</button>
          </div>
          <img src={heroImg} alt="" />
        </div>
      </div>
  )
}

export default Hero