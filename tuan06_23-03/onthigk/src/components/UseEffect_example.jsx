import { useEffect, useState } from "react";

export default function DanhSachNguoiDung() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi lấy dữ liệu:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Danh sách người dùng</h2>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>

        </div>
    );
}
