import React, { useContext } from "react";
import { AuthContext } from "../Context/Lac15_AuthContext";

function Lac15_Login() {

    const { login } = useContext(AuthContext);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Student Management System</h2>

            <p>Please Login to Continue</p>

            <button onClick={login}>
                Login
            </button>
        </div>
    );
}

export default Lac15_Login;