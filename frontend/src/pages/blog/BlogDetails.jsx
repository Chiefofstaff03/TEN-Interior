import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "..Components/Blogdata"; 
import "../Blog.css";

export default function BlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <h2 className="not-found">Blog not found</h2>;
    }

    return (
        <div className="blog-details-container">
        
            <div className="buttons-container">
                <button className="back-btn" onClick={() => navigate("/blogs")}>⬅ </button>
                {post.category && (
                    <button className="back-btn" onClick={() => navigate(`/category/${post.category}`)}>
                        ⬅ Back to {post.category}
                    </button>
                )}
            </div>

         
            <div className="blog-content">
                <h1 className="blog-title">{post.title}</h1>
                <img src={post.image} alt={post.title} className="blog-image" />
                <p className="blog-text">{post.fullContent}</p>
            </div>
        </div>
    );
}
