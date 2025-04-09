import { useEffect, useState } from "react";

export default function DanhSachBaiViet() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Lỗi khi gọi API:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Danh sách bài viết</h2>

            <ul>
                {posts.map(post => (
                    <li key={post.id} style={{ marginBottom: 10 }}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}
