import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

function Lac14_Message() {
    //Task 2
    // const [count, setCount] = useState(0)
    // const [time,setTime] = useState(new Date())
    // const [timear, setTimear] = useState(30)
    // const [user, setUser] = useState([])
    const [width, setWidth] = useState(window.innerWidth);

    //Task 1
    useEffect(() => {
        // console.log("Component Mounted")
        // document.title = `Count: ${count}`;

        // const interval = setInterval(() => {
        //     setTime(new Date());
        // }, 1000);

        // return () => {
        //     clearInterval(interval);
        // };

        // if (timear > 0) {
        //     const interval = setInterval(() => {
        //         setTimear(timear - 1)
        //     },1000)
        //     return () => clearInterval(interval);
        // }

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((data) => setUser(data));

        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    })


    return (
        <>
            {/* task- 1  */}
            {/* <h2>Hello</h2> */}
            {/* task- 2 */}
            {/* <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button> */}

            {/* task- 3 */}
            {/* <h2>{time.toLocaleTimeString()}</h2> */}

            {/* task- 4 */}
            {/* <h2>Timer : {timear}</h2> */}

            {/* task- 5 */}


            {/* <ul>
                {user.map((users) => (
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul> */}

            {/* task - 6 */}
            <h2> {width}</h2>
        </>

    )

}

export default Lac14_Message