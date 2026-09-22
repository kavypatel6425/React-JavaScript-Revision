import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ApiReducer() {
    const user = useSelector((state) => state.users.value)

    const dispatch = useDispatch()

    const handleUser = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3000/studentData"
            );

            dispatch(getUser(res.data));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <button onClick={handleUser}>Get Students</button> <br />
            {user.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.course}</p>
                </div>
            ))}
        </>
    )
}

export default ApiReducer