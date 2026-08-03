import React from 'react'

function StudentList() {
    let student = ["Kavy", "Hiya", "Het", "Aastha"]

    let fruites = ["Apple", "Mango", "Orenge", "Banana"]

    let employ = [
        {
            id: 1,
            name: "Kavy",
            position: "Frontend Developer",
            salary: 30000,
        },]

    let products = [{
        id: 1,
        name: "Iphone 17pro",
        price: 120000
    }]

    let course = ["Full Stack", "Frontend", "Python", "MERN Stack"]

    let Movies = [{
        id: 1,
        name: "Toxic",
        releseYear: 2026,
        reting: 4.5
    },
    {
        id: 2,
        name: "Bhoot Bangla",
        releseYear: 2025,
        reting: 4.3

    },
    ]

    let Mobiles = [{
        id: 1,
        name: "Iphon 15pro",
        Brand: "Iphon",
        price: 120000
    },
    {
        id: 2,
        name: "S25 Ultra",
        Brand: "Samsung",
        price: 130000
    },
    ]

    let menu = [
        {
            id: 1,
            name: "Paneer Butter Masala",
            category: "Main Course",
            price: 280,
            rating: 4.8,
        },
        {
            id: 2,
            name: "Veg Biryani",
            category: "Rice",
            price: 220,
            rating: 4.6,
        },
        {
            id: 3,
            name: "Margherita Pizza",
            category: "Pizza",
            price: 350,
            rating: 4.7,
        },
    ];

    let shopingCart = [
        {
            id: 1,
            name: "Sampoo",
            Quantity: "2 Bottel",
            price: 400,
        },
        {
            id: 2,
            name: "Mung dal",
            Quantity: "2 kg",
            price: 400,
        },

    ];

    let userProfile = [
        {
            id: 1,
            Name: "Kavy Patel",
            Email: "kavy@gmaile.com",
            City: "Idar",
        },
        {
            id: 2,
            Name: "Het Patel",
            Email: "het@gmaile.com",
            City: "Ahemdabad",
        },

    ];

    let books = [
        {
            id: 1,
            Name: "Beleve in your Self",
            Author: "Kavy Patel",
            Price: 400,
        },
        {
            id: 2,
            Name: "HardWork",
            Author: "Het Patel",
            Price: 300,
        },

    ];
    let patients = [
        {
            id: 1,
            Name: "Trusha Patel",
            Doctor_Name: "Kavy Patel",
        },
        {
            id: 2,
            Name: "Dhruv Prajapati",
            Doctor_Name: "Het Patel",
        },

    ];

    const teamMembers = [
        { id: 1, name: "Kavy", designation: "Frontend Developer" },
        { id: 2, name: "Hiya", designation: "UI Designer" },
        { id: 3, name: "Het", designation: "Backend Developer" },
    ];

    const orders = [
        { id: 101, product: "Laptop", price: 65000 },
        { id: 102, product: "Mouse", price: 800 },
        { id: 103, product: "Keyboard", price: 1500 },
    ];

    const results = [
        { id: 1, name: "Kavy", marks: 89 },
        { id: 2, name: "Hiya", marks: 94 },
        { id: 3, name: "Het", marks: 76 },
    ];

    const blogs = [
        { id: 1, title: "React Basics", author: "Kavy" },
        { id: 2, title: "JavaScript ES6", author: "Hiya" },
        { id: 3, title: "CSS Grid", author: "Het" },
    ];

    const posts = [
        { id: 1, user: "Kavy", post: "Learning React!" },
        { id: 2, user: "Hiya", post: "Good Morning " },
        { id: 3, user: "Het", post: "Just completed a project." },
    ];

    const OnlineCourses = [
        { id: 1, course: "React JS", Trainer: "Denish Chotaliya", Duration: "6 Month", progress: "80%" },
        { id: 2, course: "Node JS", Trainer: "Jay Amin", Duration: "5 Month", progress: "60%" },
        { id: 3, course: "MongoDB", Trainer: "Chetan Sharma", Duration: "1 Month", progress: "40%" },
    ];

    const customers = [
        { id: 1, name: "Rahul", Company: "Web Info Tec", Contect: 9898259825, city: "Ahmedabad" },
        { id: 2, name: "Priya", Company: "Web Solusen ", Contect: 9898259825, city: "Surat" },
        { id: 3, name: "Amit", Company: "Patel Info Tec", Contect: 9898259825, city: "Rajkot" },
    ];
    const Products = [
        { id: 1, name: "T.V", Category: "Electoniecs", Price: 50000, Brand: "Sumsang", stock: "In Stock", },
        { id: 2, name: "Fridge", Category: "Electoniecs", Price: 40000, Brand: "L.G", stock: "Out of Stock", },
        { id: 3, name: "HeadPhone", Category: "Electoniecs", Price: 1500, Brand: "Boat", stock: "In Stock", },
        { id: 4, name: "EaarPhone", Category: "Electoniecs", Price: 1000, Brand: "Noise", stock: "Limited Stock", },
        { id: 5, name: "Air conditioners", Category: "Electoniecs", Price: 20000, Brand: "Mitsubicy", stock: "In Stock", },
        { id: 6, name: "Home storage", Category: "Home Decore", Price: 1500, Brand: "HomeStrap", stock: "In Stock", },
        { id: 7, name: "Cushion covers", Category: "Home Decore", Price: 500, Brand: "Reymond", stock: "Limited Stock", },
        { id: 8, name: "bedsheets", Category: "Home Decore", Price: 1200, Brand: "Reymond", stock: "In Stock", },
        { id: 9, name: "Wallpapers", Category: "Home Decore", Price: 1000, Brand: "HomeStrap", stock: "Limited Stock", },
        { id: 10, name: "Microwaves", Category: "Electoniecs", Price: 6000, Brand: "L.G", stock: "Out of Stock", },
    ];


    return (
        <div>
            <h4>task - 1</h4>
            {student.map((list, index) => (
                <h3>{list}</h3>
            ))}

            <hr />
            <h4>task - 2</h4>
            <ul>
                {fruites.map((fruite) => (
                    <li>{fruite}</li>
                ))}
            </ul>

            <hr />
            <h4>task - 3</h4>
            <ul>
                {employ.map((employee) => (
                    <li key={employee.id}>
                        <h3>{employee.name}</h3>
                        <p>{employee.position}</p>
                        <p>Salary: {employee.salary}</p>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>task - 4</h4>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>price :{product.price}</p>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>task - 5</h4>
            <ul>
                {course.map((courses) => (
                    <h3>{courses}</h3>
                ))}
            </ul>

            <hr />
            <h4>task - 6</h4>
            <ul>
                {Movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.name}</h3>
                        <p>{movie.releseYear}</p>
                        <p>{movie.reting}</p>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>task - 7</h4>
            <ul>
                {Mobiles.map((mobil) => (
                    <li key={mobil.id}>
                        <h3>{mobil.name}</h3>
                        <p>{mobil.Brand}</p>
                        <p>{mobil.price}</p>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>task - 8</h4>

            {menu.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Category: {item.category}</p>
                    <p>Price: {item.price}</p>
                    <p>Rating: {item.rating}</p>

                </div>
            ))}
            <hr />

            <h4>task - 9</h4>

            {shopingCart.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Quantity: {item.Quantity}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
            <hr />

            <h4>task - 10</h4>

            {userProfile.map((user) => (
                <div key={user.id}>
                    <h2>{user.Name}</h2>
                    <p>Email: {user.Email}</p>
                    <p>City: {user.City}</p>
                </div>
            ))}
            <hr />

            <h4>task - 11</h4>

            {books.map((book) => (
                <div key={book.id}>
                    <h2>{book.Name}</h2>
                    <p>Author: {book.Author}</p>
                    <p>Price: {book.Price}</p>
                </div>
            ))}
            <hr />

            <h4>task - 12</h4>

            {patients.map((patient) => (
                <div key={patient.id}>
                    <h2>{patient.Name}</h2>
                    <p>Doctor Name: {patient.Doctor_Name}</p>
                </div>
            ))}
            <hr />

            <h4>task - 13</h4>

            {teamMembers.map((member) => (
                <div key={member.id}>
                    <h3>{member.designation}</h3>
                    <p>{member.name}</p>
                </div>
            ))}
            <hr />

            <h4>task - 14</h4>

            {orders.map((order) => (
                <div key={order.id}>
                    <h3>{order.product}</h3>
                    <p>₹{order.price}</p>
                </div>
            ))}
            <hr />

            <h4>task - 15</h4>

            {results.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Marks: {student.marks}</p>
                </div>
            ))}
            <hr />

            <h4>task - 16</h4>

            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                </div>
            ))}
            <hr />

            <h4>task - 17</h4>

            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.user}</h3>
                    <p>{post.post}</p>
                </div>
            ))}
            <hr />

            <h4>task - 18</h4>

            {OnlineCourses.map((course) => (
                <div key={course.id}>
                    <h3>{course.course}</h3>
                    <h3>{course.Trainer}</h3>
                    <h3>{course.Duration}</h3>
                    <p>{course.progress}</p>
                </div>
            ))}
            <hr />
            <h4>task - 19</h4>

            {customers.map((customer) => (
                <div key={customer.id}>
                    <h3>{customer.name}</h3>
                    <h3>{customer.Company}</h3>
                    <h3>{customer.Contect}</h3>
                    <p>{customer.city}</p>
                </div>
            ))}
            <hr />
            <h4>task - 20</h4>

            {Products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Category: {product.Category}</p>
                    <p>Price: {product.Price}</p>
                    <p>Brand: {product.Brand}</p>
                    <p>Stock: {product.stock}</p>
                    <hr />
                </div>
            ))}




        </div>
    )
}

export default StudentList