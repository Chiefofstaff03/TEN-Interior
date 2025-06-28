import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { blogPosts } from "..Components/Blogdata"; 
import "../App.css";

export default function BlogList() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="blog-list-container">
            {/* Search Bar */}
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search blog themes..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <center><h1 className="text-center">All Blog Posts</h1></center>
            <div className="blog-grid">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <h2 className="blog-heading">{post.title}</h2>
                        <p className="blog-text">{post.content.substring(0, 50)}...</p>
                      
                         <div className="blog-footer">
                            <div className="social-icons">
                                <a href="#" className="icon facebook"><FaFacebook /></a>
                                <a href="#" className="icon twitter"><FaTwitter /></a>
                                <a href="#" className="icon instagram"><FaInstagram /></a>
                            </div>
                
                            <button onClick={() => navigate(`/post/${post.id}`)}>Read More</button>
                        </div>
                    </div>
            
                ))}
            </div>
        </div>
    );
}
