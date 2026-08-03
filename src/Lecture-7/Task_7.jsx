import React, { useState } from 'react'

function Task_7() {
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(0)
    const [light, setLight] = useState(true)
    const [color, setColor] = useState("white");
    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [number, setNumber] = useState();
    const [course, setCourse] = useState();
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [foodId, setFoodId] = useState("");
    const [message, setMessage] = useState("");
    const [feedback, setFeedback] = useState("");

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [profession, setProfession] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [patient, setPatient] = useState("");
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState();

    // console.log(data);


    function Light() {
        if (light === true) {
            setLight(false)
        } else {
            setLight(true)
        }
    }

    const product = {
        id: 1,
        name: "Earphone",
        price: 800,
        brand: "Noise"
    }

    function viewDetails(id) {
        alert("Product ID: " + id);
    }

    const user = {
        id: 1,
        name: "Kavy Patel",
        age: 20,
        city: "Ahmedabad",
    };

    function deleteUser(id) {
        alert("User Deleted. ID: " + id);
    }



    const movies = [
        { id: 1, name: "Pushpa 2" },
        { id: 2, name: "KGF 2" },
        { id: 3, name: "RRR" },
        { id: 4, name: "Bahubali 2" },
    ];

    function selectMovie(id) {
        setSelectedId(id);
    }

    const food = [
        { id: 1, name: "Pasta" },
        { id: 2, name: "Burger" },
        { id: 3, name: "French Frice" },
        { id: 4, name: "Vadapav" },
    ];

    function selectFood(id) {
        setFoodId(id);
    }




    // const products = [
    //     { id: 1, name: "Laptop", price: 50000 },
    //     { id: 2, name: "Mobile", price: 20000 },
    //     { id: 3, name: "Headphone", price: 2000 },
    // ];

    // function addToCart(id) {
    //     setMessage("Product " + id + " added to cart.");
    // }





    function increase() {
        setQuantity(quantity + 1);
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }


    const products = [
        { id: 1, name: "Laptop", price: 50000, brand: "HP", stock: "In Stock" },
        { id: 2, name: "Mobile", price: 20000, brand: "Samsung", stock: "In Stock" },
        { id: 3, name: "Headphone", price: 2500, brand: "Boat", stock: "Out of Stock" },
        { id: 4, name: "Smart Watch", price: 3500, brand: "Noise", stock: "In Stock" },
        { id: 5, name: "Keyboard", price: 1500, brand: "Logitech", stock: "In Stock" },
        { id: 6, name: "Mouse", price: 800, brand: "Dell", stock: "Out of Stock" },
        { id: 7, name: "Monitor", price: 12000, brand: "LG", stock: "In Stock" },
        { id: 8, name: "Speaker", price: 3000, brand: "JBL", stock: "In Stock" },
    ];

    function viewDetails(id) {
        alert("View Details of Product ID: " + id);
    }

    function addToCart(id) {
        alert("Product " + id + " Added to Cart");
    }

    function buyNow(id) {
        alert("Buying Product ID: " + id);
    }
    return (
        <div>
            <h3>Task - 1</h3>
            <button onClick={(e) => { console.log("Welcome To React") }}>Click</button>

            <h3>Task - 2</h3>
            <h4>{count}</h4>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>

            <h3>Task - 3</h3>
            <h4>Likes :{like}</h4>
            <button onClick={() => { setLike(like + 1) }}>Like</button>

            <h3>Task - 4</h3>
            <h4>Status : {light ? "On" : "Off"}</h4>
            <button onClick={Light}>{light ? "Off" : "On"}</button>

            <h3>Task - 5</h3>
            <h4 style={{ backgroundColor: color }}>Kavy Patel</h4>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("green")}>Green</button>

            <h3>Task - 6</h3>
            <input type="text" onChange={(e) => { setData(e.target.value) }} />
            <p>{data}</p>

            <h3>Task - 7</h3>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
            <p>{email}</p>

            <h3>Task - 8</h3>
            <input type="search" onChange={(e) => { setSearch(e.target.value) }} />
            <p>{search}</p>

            <h3>Task - 9</h3>
            <h4>Login Form</h4>
            <form action="">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
            </form>

            <h3>Entered Values</h3>
            <p>Email: {email}</p>
            <p>Password: {password}</p>

            <h3>Task - 10</h3>
            <h4>Registration Form</h4>

            <form action="">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} /> <br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <input type="number" onChange={(e) => { setNumber(e.target.value) }} /> <br />
                <input type="text" onChange={(e) => { setCourse(e.target.value) }} /> <br />
            </form>

            <h3>Entered Values</h3>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Mobile Number: {number}</p>
            <p>Course: {course}</p>

            <h3>Task - 11</h3>
            <h4>Product Details</h4>

            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Brand: {product.brand}</p>

            <button onClick={() => viewDetails(product.id)}>
                View Details
            </button>

            <h3>Task - 12</h3>
            <h2>User Details</h2>

            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>

            <button onClick={() => deleteUser(user.id)}>
                Delete
            </button>

            <h3>Task - 13</h3>

            {movies.map((movie) => (
                <div
                    key={movie.id}
                >
                    <h3>{movie.name}</h3>
                    <p>ID: {movie.id}</p>

                    <button onClick={() => selectMovie(movie.id)}>
                        Select Movie
                    </button>
                </div>
            ))}

            <h3>{selectedId}</h3>

            <h3>Task - 14</h3>

            {food.map((foods) => (
                <div
                    key={foods.id}
                >
                    <h3>{foods.name}</h3>
                    <p>ID: {foods.id}</p>

                    <button onClick={() => selectFood(foods.id)}>
                        Order Now
                    </button>
                </div>
            ))}

            <h3>{foodId}</h3>

            <h3>Task - 15</h3>

            {products.map((product) => (
                <div
                    key={product.id}
                >
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>

                    <button onClick={() => addToCart(product.id)}>
                        Add to Cart
                    </button>
                </div>
            ))}

            <h3>{message}</h3>

            <h3>Task - 16</h3>
            <h4>Feedback Form</h4>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="5"
                cols="30"
            ></textarea>

            <h4>Your Feedback</h4>
            <p>{feedback}</p>

            <h3>Task - 17</h3>
            <h4>User Profile Update</h4>

            Name :<input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />

            City :<input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <br /><br />

            Profession :<input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
            />
            <br /><br />

            <p>Name: {name}</p>
            <p>City: {city}</p>
            <p>Profession: {profession}</p>


            <h3>Task - 18</h3>
            <h4>Product Quantity Selector</h4>

            <h4>Quantity: {quantity}</h4>

            <button onClick={decrease}>-</button>

            <button onClick={increase}>+</button>

            <h3>Task - 19</h3>
            <h4>Hospital Apoinment</h4>

            Patient Name :<input
                type="text"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
            />
            <br /><br />

            Doctor Name :<input
                type="text"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
            />
            <br /><br />

            Apoinment Date :<input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <br /><br />

            <p>Patient Name : {patient}</p>
            <p>Doctor Name : {doctor}</p>
            <p>Apoinment Date : {date}</p>




            <h3>Task - 20</h3>
            <h4>E-Commerce Dashboard</h4>

            {products.map((product) => (
                <div
                    key={product.id}
                >
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Stock: {product.stock}</p>

                    <button onClick={() => viewDetails(product.id)}>
                        View Details
                    </button>

                    <button onClick={() => addToCart(product.id)}>
                        Add to Cart
                    </button>

                    <button onClick={() => buyNow(product.id)}>
                        Buy Now
                    </button>
                </div>
            ))}

        </div>
    )
}

export default Task_7