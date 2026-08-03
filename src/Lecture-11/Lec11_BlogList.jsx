import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lec11_BlogList() {
    const navigate = useNavigate();

    const blogs = [
        {
            id: 1,
            title: "React",
        },
        {
            id: 2,
            title: "JavaScript ",
        },
        {
            id: 3,
            title: "Node.Js",
        }
    ];
    return (
        <div>
            <h1>Blog List</h1>

            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>

                    <button onClick={() => navigate(`/blog/${blog.id}`)}>
                        Read Blog
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Lec11_BlogList