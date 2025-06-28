import React from "react";
import "./BlogPage.css";
import blogData from "../../assets/data/blogData";
import blogSearchImage from "../../assets/Image/blogImages/blog_search_image.jpg";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function BlogPage() {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".recommended-blog-card");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 30; 
        const scrollAmount = cardWidth + gap;

        carouselRef.current.scrollBy({
          left: direction === "next" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div>
      <header className="blog-page-header">
        <img src={blog.image} alt="" />
      </header>

      <section className="blog-page-section">
        <h1>{blog.name}</h1>
        <article className="blog-page-content">
          <div className="blog-page-para">
            <p>{blog.para1}</p>
            <img src={blog.paraImage1} alt="" />
            <p>{blog.para2}</p>
            <img src={blog.paraImage2} alt="" />
            <p>{blog.para3}</p>
            <img src={blog.paraImage3} alt="" />
          </div>
          <div className="other-content">
            <img src={blogSearchImage} alt="" />
            <h6>GET TO KNOW THE DESIGNER</h6>
            <p>
              Kayla Daniels has a soft spot for traditional & classical style.
              And nice people who appreciate great design. In her hands, homes
              transcend mere structures, becoming inviting, liveable canvases
              that function as the backdrop for every iteration of your life.
            </p>
          </div>
        </article>
      </section>

      <section className="recommended-blog">
        <h6>KEEP EXPLORING</h6>
        <h1>Recommended Reads—Just for You</h1>

        <section className="recommended-blog-cards" ref={carouselRef}>
          {blogData.map((data, index) => (
            <article key={index} className="recommended-blog-card">
              <Link to={`/blog/${data.id}`}>
                <img src={data.image} alt={data.name} />
                <h6>{data.tag}</h6>
                <h3>{data.name}</h3>
              </Link>
            </article>
          ))}
        </section>

        <hr />

        <div className="recommended-blog-buttons">
          <p onClick={() => handleScroll("prev")}>Previous Blog</p>
          <p onClick={() => handleScroll("next")}>Next Blog</p>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
