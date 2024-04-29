import "./blog.css"
import blog1 from "../../assets/blog-1.jpg"
import blog2 from "../../assets/blog-2.jpg"
import blog3 from "../../assets/blog-3.png"
const Blog = () => {
  return (
    <section className="section blog">
      <div className="title">
        <span>BLOGS</span>
        <h2>Latest News</h2>
      </div>

      <div className="row container">
        <div className="col">
          <div className="top">
            <img src={blog1} alt="" />
          </div>
          <div className="bottom">
            <h3>Trendy</h3>
            <h4>
              Lorem Ispum is a placeholder text commomly used as a free text.
            </h4>
            <span>10 January 2024</span>
          </div>
        </div>
        <div className="col">
          <div className="top">
            <img src={blog2} alt="" />
          </div>
          <div className="bottom">
            <h3>Trendy</h3>
            <h4>
              Lorem Ispum is a placeholder text commomly used as a free text.
            </h4>
            <span>10 January 2024</span>
          </div>
        </div>
        <div className="col">
          <div className="top">
            <img src={blog3} alt="" />
          </div>
          <div className="bottom">
            <h3>Trendy</h3>
            <h4>
              Lorem Ispum is a placeholder text commomly used as a free text.
            </h4>
            <span>10 January 2024</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog