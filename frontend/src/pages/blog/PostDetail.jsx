import { useParams, useNavigate } from "react-router-dom";
import "./App.css"



export default function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const postDetails = {
        1: { title: "Modern Minimalism", content: "A simple, elegant way of living..." },
        2: { title: "Rustic Charm", content: "Embracing warmth and wood textures..." },
        3: { title: "Scandinavian Simplicity", content: "Functional, yet cozy spaces..." },
        4: { title: "Industrial Chic", content: "A bold mix of raw materials..." },
        5: { title: "Bohemian Rhapsody", content: "Eclectic and colorful decor ideas..." },
        6: { title: "Coastal Living", content: "Bringing ocean vibes indoors..." },
        7: { title: "Eco-Friendly Home", content: "Sustainability and aesthetics combined..." },
        8: { title: "Vintage Vibes", content: "Classic styles with a modern touch..." },
        9: { title: "Art Deco Glam", content: "Luxury and geometric designs..." },
        10: { title: "Futuristic Designs", content: "Smart homes and sleek designs..." },
        11: { title: "Green Living", content: "Bringing nature indoors..." },
        12: { title: "Japandi Fusion", content: "Scandinavian meets Japanese minimalism..." },
        13: { title: "Contemporary Classic", content: "Traditional elements in modern homes..." },
        14: { title: "Bold and Bright", content: "Vibrant colors making a statement..." },
        15: { title: "Urban Jungle", content: "Greenery and urban aesthetics combined..." },
    };

    return (
        <div className="post-detail">
            <button onClick={() => navigate("/")} className="back-btn">⬅</button>

            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} className="post-image" />
                    <p>{post.content}</p>
                    <p><strong>Category:</strong> {post.category}</p>
                </>
            ) : (
                <h2>Post Not Found</h2>
            )}
        </div>
    );
}


