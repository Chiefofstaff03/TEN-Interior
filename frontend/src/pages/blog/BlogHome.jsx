import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./BlogHome.css";
import scaled from "../../assets/Image/blogImages/blogImage1.jpg";
import blogData from "../../assets/data/blogData";

const BlogHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const tagIds = [...new Set(blogData.map((data) => data.tagId.toLowerCase()))];
    if (tagIds.includes(searchQuery.trim())) {
      navigate(`/category/${searchQuery.trim()}`);
    }
  };

  const filteredData = blogData.filter((data) =>
    data.name.toLowerCase().includes(searchQuery) ||
    data.tag.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">The Ten Interiors Blog</h1>
        <p className="blog-subtitle">
          A curated collection of interior design insights, project reveals, and
          design inspiration that celebrates the art of creating beautiful,
          functional spaces. Our philosophy focuses on elegant simplicity while
          creating spaces that feel both sophisticated and deeply personal.
        </p>
      </header>

      <nav className="blog-navigation">
        <div className="blog-category-navigation">
          {[...new Set(blogData.map((data) => data.tagId))].map(
            (tagId, index) => (
              <div key={index} className="nav-links">
                <Link to={`/category/${tagId}`}>{tagId}</Link>
              </div>
            )
          )}
        </div>

        <div className="search-wrapper">
          <form className="search-form" role="search" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search the blog"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <BsSearch className="search-icon" />
          </form>
        </div>
      </nav>

      <main className="blog-main">
        <article className="featured-post">
          <div className="post-image">
            <img src={scaled} alt="Featured interior design project" />
          </div>
          <div className="post-content">
            <Link to="/category/interior-reveals" className="post-category">
              INTERIOR REVEALS
            </Link>
            <Link
              to="/blog/project-avenue-pt-3-primary-boys-room"
              className="post-title"
            >
              <h2>Project Avenue Pt. 3 – Primary, Boys Room, Office</h2>
            </Link>
            <p className="post-excerpt">
              In our final part of our Avenue project reveals, let's take a
              detailed look at the Master Bedroom, the Boys Bedroom and "His"
              Office. Megan and Mike wanted a serene and calming bedroom and we
              understood the assignment. We delivered a space that embodies
              tranquility while maintaining visual interest.
            </p>
            <Link
              to="/blog/project-avenue-pt-3-primary-boys-room"
              className="read-more"
            >
              READ MORE
            </Link>
          </div>
        </article>

        <section className="post-grid">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <article key={index} className="post-card">
                <Link to={`/blog/${data.id}`}>
                  <div className="card-images">
                    <img src={data.image} alt="Project Avenue interior" />
                  </div>
                  <div className="card-content">
                    <span className="card-category">{data.tag}</span>
                    <h3>{data.name}</h3>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p className="no-results">No results found for “{searchQuery}”.</p>
          )}
        </section>
      </main>

      <footer className="blog-footer">
        <p>
          A studio crafting home designs & carefully curating collections to
          elevate living spaces
        </p>
      </footer>
    </div>
  );
};

export default BlogHome;
