import "./statistics.css"
import { FaSquareCheck, FaUser } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
const Statistics = () => {
  return (
    <section className="section statistics">
      <div className="title">
        <span>STATS</span>
        <h2>Our Statistics</h2>
      </div>

      <div className="row container">
        <div className="col">
          <div className="icon">
            <FaSquareCheck />
          </div>
          <h3>Easy Order System</h3>
          <p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
        </div>
        <div className="col">
          <div className="icon">
            <FaUser />
          </div>
          <h3>On Time Delievery</h3>
          <p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
        </div>
        <div className="col">
          <div className="icon">
            <AiFillDollarCircle />
          </div>
          <h3>Money Back Gaurantee</h3>
          <p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
        </div>
        <div className="col">
          <div className="icon">
            <FaUser />
          </div>
          <h3>24/7 Customer Support</h3>
          <p>Lorem Ispum is a placeholder text commomly used as a free text.</p>
        </div>
      </div>
    </section>
  )
}

export default Statistics