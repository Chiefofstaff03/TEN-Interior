import React from "react";
import "./BlogCategory.css";
import blogData from "../../assets/data/blogData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BlogCategory() {
  const { blogTagId } = useParams();

  const filteredBlogs = blogData.filter((b) => b.tagId === blogTagId);

  const readableTagName = filteredBlogs[0]?.tag || blogTagId;

  if (filteredBlogs.length === 0) {
    return <h2>No blogs found in this category</h2>;
  }

  return (
    <div className="blog-category">
      <h6>Published posts filed in:</h6>
      <h1>{readableTagName}</h1>

      <section className="blog-category-cards">
        {filteredBlogs.map((data, index) => (
          <article key={index} className="blog-category-card">
            <Link to={`/blog/${data.id}`}>
              <img src={data.image} alt={data.name} />
              <h6>{data.tag}</h6>
              <h3>{data.name}</h3>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default BlogCategory;
