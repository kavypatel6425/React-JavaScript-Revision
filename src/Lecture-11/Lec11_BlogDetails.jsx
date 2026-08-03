import React from 'react'
import { useParams } from 'react-router-dom';

function Lec11_BlogDetails() {
    const { id } = useParams();

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

    const blog = blogs.find((item) => item.id === Number(id));
    return (
        <div>
            <h3>Blog Title: {blog.title}</h3>
            <p>Blog ID: {id}</p>
        </div>
    )
}

export default Lec11_BlogDetails