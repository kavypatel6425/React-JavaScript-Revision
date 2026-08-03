import React, { useState } from 'react'

function Task_9() {
    // let isLogin = true
    // let marks = 40;

    //task - 3
    // let age = 40;
    // if (age > 18) {
    //     return "Eligible for vote"
    // } else {
    //     return "Not Eligible for vote"
    // }

    // let inStock = true;
    // let notification = 1;

    // const [btn, setBtn] = useState(false)

    // function handleClick() {
    //     setBtn(!btn)
    // }

    // let loading = true;
    // let cartitem = 1;
    // let ticketAvaileble = true;
    // let isEmploy = true;
    // let isAdmine = true;
    // let isAccountActive = true;
    // let isEnrolled = true;
    // let appoinmentConformd = true;
    // let orderDelivard = true;
    // let hasDiscount = true;
    // let isPresant = true;
    // let matchStarted = true;

    const [isLogin, setIsLogin] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)
    const [notification, setNotification] = useState(5)

    function handleLogin() {
        setIsLogin(true);
    }

    function handleLogout() {
        setIsLogin(false);
    }

    if (!isLogin) {
        return (
            <div>
                <h2>Please Login</h2>
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }
    
    return (
        <div>
            {/* Task - 1 */}
            {/* <h2>{isLogin ? "Welcome User" : "Please Login"}</h2> */}
            <hr />

            {/* Task - 2 */}
            {/* <h3>{marks > 35 ? "Pass" : "Fail"}</h3> */}
            <hr />

            {/* Task - 4 */}
            {/* <h3>{inStock ? "In Stock" : "Out of Stock"}</h3> */}
            <hr />

            {/* Task - 5 */}
            {/* <p>Notifications: {notification}</p> */}

            {/* {notification > 0 && (
                <h2>You have new notifications.</h2>
            )} */}
            <hr />

            {/* Task - 6 */}
            {/* <h3>{btn ? "Welcome User" : "Please Login"}</h3>
            <button onClick={handleClick}>{btn ? "Logout" : "Login"}</button> */}
            <hr />

            {/* Task - 7 */}
            {/* <h3>{btn ? "Dark Mode Enabled" : "Light Mode Enabled"}</h3>
            <button onClick={handleClick}>{btn ? "Light Mode" : "Dark Mode"}</button> */}
            <hr />

            {/* Task - 8 */}
            {/* <h3>{loading ? "Loading......" : "Data Loaded Successfully"}</h3> */}

            {/* Task - 9*/}
            {/* <h3>cartitem: {cartitem}</h3> */}
            {/* <p>{cartitem > 0 ? "Item Available" : "Cart is empty"}</p> */}
            <hr />

            {/* Task - 10 */}
            {/* <h3>{ticketAvaileble ? "Ticket Availeble" : "House Full"}</h3> */}
            <hr />

            {/* Task - 10 */}
            {/* <h3>{ticketAvaileble ? "Ticket Availeble" : "House Full"}</h3> */}
            <hr />

            {/* Task - 11 */}
            {/* {isEmploy && (
                <h2>Employe Deshbord</h2>
            )} */}
            <hr />

            {/* Task - 12 */}
            {/* {isAdmine && (
                <>
                    <h2>Admin Deshbord</h2>
                    <p>manage users</p>
                    <p>Reports</p>
                </>
            )} */}

            <hr />

            {/* Task - 13 */}
            {/* <h3>{isAccountActive ? "Account Active" : "Account Bloced"}</h3> */}

            <hr />

            {/* Task - 14 */}
            {/* <h3>{isEnrolled ? "Continue Learning" : "Enroll Now"}</h3> */}

            <hr />

            {/* Task - 15 */}
            {/* <h3>{appoinmentConformd ? "Appoinment Conformed" : "Appoinment Pending"}</h3> */}

            <hr />

            {/* Task - 16 */}
            {/* <h3>{orderDelivard ? "Deleveried" : "On the way"}</h3> */}

            <hr />

            {/* Task - 17 */}
            {/* {hasDiscount && (
                <h2>30% Discount</h2>
            )} */}

            {/* Task - 18 */}
            {/* <h3>{isPresant ? "Present" : "Absent"}</h3> */}


            {/* Task - 19 */}
            {/* {matchStarted ? (
                <h2> Live Score</h2>
            ) : (
                <h2>Match Yet to Start</h2>
            )} */}

            {/* Task - 20 */}

            <div>

                <h2>Welcome User</h2>

                <button onClick={handleLogout}>Logout</button>

                <h3>Dashboard</h3>

                {isAdmin ? (
                    <div>
                        <h3>Admin Panel</h3>
                        <p>Manage Users</p>
                        <p>Reports</p>
                    </div>
                ) : (
                    <p>Normal User</p>
                )}

                {notification > 0 && (
                    <h3>Notifications: {notification}</h3>
                )}

            </div>



        </div>
    )
}

export default Task_9