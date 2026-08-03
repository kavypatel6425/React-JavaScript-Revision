import React from 'react'

function MultipleJsx() {
    return (
        <>
            {/* Task - 15 */}
            <h3>This is fregment</h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas!</p>
            <button>Click</button>

            {/* Task - 16 */}
            <h3 style={{ color: "red" }}>This is Inline Css</h3>
            <p style={{ backgroundColor: "aqua" }}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas!</p>
            <button style={{ borderRadius: "30%" }}>Click</button>
            <button style={{ padding: "50px" }}>Click</button>

            {/* Task - 17 */}

            <h3>Login Page</h3>


            <label htmlFor="UserName">UserName :</label>
            <input type="text" /> <br />
            <label htmlFor="Email">Email :</label>
            <input type="email" /> <br />
            <label htmlFor="Password">Password :</label>
            <input type="password" /><br />
            <span><a href="#">Forgot Password?</a></span>

            {/* Task - 18 */}

            <h3>Registesan Form</h3>

            <form action="#">
                <label htmlFor="UserName">UserName :</label>
                <input type="text" /> <br />
                <label htmlFor="Email">Email :</label>
                <input type="email" /> <br />
                <label htmlFor="Password">Password :</label>
                <input type="password" /><br />
                <label htmlFor="Password">Conform Password :</label>
                <input type="password" /><br />

                <button>Submit</button>
            </form>

            {/* Task - 19 */}

            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quam.</p>
            <label htmlFor="UserName">UserName :</label>
            <input type="text" /> <br />
            <img src="" alt="" />

            

        </>
    )
}

export default MultipleJsx