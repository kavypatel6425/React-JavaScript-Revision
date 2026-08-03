import React from 'react'

function Deshbord() {
    const user = {
        name: "Kavy Patel",
        age: 20,
        course: "BCA",
        city: "Ahmedabad",
        email: "kavy@example.com",
        phone: "+91 9876543210",
    };
    return (
        <div>



            <section
                style={{
                    backgroundColor: "#dfdfdf",
                    width: "400px",
                    borderRadius: "12px",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN9BY5gyMxjAxe5I3SbK0L_EJf8t-TtE4fJwH_JpMKQ&s"
                    alt="Profile Placeholder"
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        marginBottom: "20px",
                    }}
                />

                <h1>Profile Dashboard</h1>

                <article style={{ textAlign: "left", marginTop: "20px" }}>
                    <p>
                        <b>Name:</b> {user.name}
                    </p>

                    <p>
                        <b>Age:</b> {user.age}
                    </p>

                    <p>
                        <b>Course:</b> {user.course}
                    </p>

                    <p>
                        <b>City:</b> {user.city}
                    </p>

                    <p>
                        <b>Email:</b> {user.email}
                    </p>

                    <p>
                        <b>Phone:</b> {user.phone}
                    </p>
                </article>


            </section>


        </div>
    )
}

export default Deshbord