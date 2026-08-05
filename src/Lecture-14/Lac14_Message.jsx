import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { data } from 'react-router-dom';

function Lac14_Message() {
    //Task 2
    // const [count, setCount] = useState(0)
    // const [time,setTime] = useState(new Date())
    // const [timear, setTimear] = useState(30)
    // const [user, setUser] = useState([])
    // const [width, setWidth] = useState(window.innerWidth);
    // const [online, setOnline] = useState(false)
    // const [mouse, setMouse] = useState({ x: 0, y: 0 })
    // const inputRef = useRef()

    // const [time, setTime] = useState(0);
    // const [start, setStart] = useState(false);

    // const [search, setSearch] = useState()

    // const [theme, setTheme] = useState(false)

    // const boxRef = useRef(null);
    // const [height, setHeight] = useState(0);
    // const [width, setWidth] = useState(0);

    const [scroll, setScroll] = useState(false);

    const [count, setCount] = useState(0);
    //Task 1
    // useEffect(() => {
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



    // function handleResize() {
    //     setWidth(window.innerWidth);
    // }

    // window.addEventListener("resize", handleResize);

    // return () => {
    //     window.removeEventListener("resize", handleResize);
    // };




    // window.addEventListener("online",()=>{
    //     setOnline(false)
    // })
    // window.addEventListener("online", () => setOnline(true));
    // window.addEventListener("offline", () => setOnline(false));

    // return () => {
    //     window.removeEventListener("online", () => setOnline(true));
    //     window.removeEventListener("offline", () => setOnline(false));
    // };



    // function handleMouse(event) {
    //     setMouse({
    //         x: event.clientX,
    //         y: event.clientY,
    //     });
    // }
    // window.addEventListener("mousemove", handleMouse)

    // return () => {
    //     window.removeEventListener("mousemove", handleMouse);
    // };



    // inputRef.current.focus();

    // const savedCount = localStorage.getItem("count");

    // if (savedCount) {
    //     setCount(Number(savedCount));
    // }



    // }, [])

    // function handleChange(e) {
    //     setSearch(e.target.value);
    //     console.log(e.target.value);
    // }

    // useEffect(() => {

    //     let interval;

    //     if (start) {
    //         interval = setInterval(() => {
    //             setTime(time + 1);
    //         }, 1000);
    //         return () => clearInterval(interval);
    //     }

    // }, [time, start])

    // localStorage.setItem("count", count)

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((data) => setUser(data));
    // }, [])
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count])

    // useEffect(() => {
    //     console.log("Count Changed:", count);
    // }, [count]);


    // const toggleTheme = () => {
    //     setTheme(!theme);
    // };
    // useEffect(() => {
    //     if (theme === false) {
    //         document.body.style.backgroundColor = "black"
    //     } else {
    //         document.body.style.backgroundColor = "white"
    //     }

    // }, [theme]);


    // useLayoutEffect(() => {
    //     setHeight(boxRef.current.offsetHeight);
    // }, []);


    // useLayoutEffect(() => {
    //     const updateWidth = () => {
    //         setWidth(boxRef.current.offsetWidth);
    //     };
    //     updateWidth()
    //     window.addEventListener("resize", updateWidth);

    //     return () => {
    //         window.removeEventListener("resize", updateWidth);
    //     };
    // }, [width]);

    // const moveTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };

    // useLayoutEffect(() => {
    //     if (scroll) {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: "smooth",
    //         });

    //         setScroll(false);
    //     }
    // }, [scroll]);


    useEffect(() => {
        console.log("Component Mounted");
    }, []);

    useEffect(() => {
        if (count > 0) {
            console.log("Component Updated");
        }
    }, [count]);

    useEffect(() => {
        return () => {
            console.log("Component Unmounted ");
        };
    }, []);

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
            {/* <h2> {width}</h2> */}

            {/* task - 7 */}
            {/* <h2>{online ? "Online" : "Offline"}</h2> */}

            {/* task - 8*/}
            {/* <h2>X : {mouse.x}</h2>
            <h2>Y : {mouse.y}</h2>  */}

            {/* task - 9 */}
            {/* <input type="text" ref={inputRef}/> */}

            {/* task - 10 */}
            {/* <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button> */}

            {/* task - 11 */}
            {/* <h2>{time} Seconds</h2>

            <button onClick={() => setStart(true)}>Start</button>

            <button onClick={() => setStart(false)}>Stop</button> */}

            {/* task - 12 */}
            {/* <input type="search" value={search} onChange={handleChange} />
            <h2>{search}</h2> */}

            {/* task - 13 */}

            {/* <ul>
                {user.map((users) => (
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul><br />
            <hr />
            
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button> */}

            {/* task - 14*/}
            {/* <button onClick={toggleTheme}>{theme ? "Dark Theme" : "Light Theme"}</button> */}

            {/* task - 15*/}
            {/* <div
                ref={boxRef}
                style={{
                    background: "lightblue",
                    padding: "20px",
                    border: "2px solid blue",
                    width: "300px",
                }}
            >
                <h3>Hello React</h3>
                <p>This is a box.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.</p>
            </div>

            <h2>{height}</h2> */}

            {/* task - 16*/}
            {/* <div
                ref={boxRef}
                style={{
                    padding: "20px",
                }}
            >
                <h3>Hello React</h3>
                <p>This is a box.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
            </div>

            <h2>{width}</h2> */}

            {/* task - 17*/}
            {/* <div
                style={{
                    padding: "20px",
                }}
            >
                <h3>Hello React</h3>
                <p>This is a box.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                    mollitia vel repellat? Quia libero voluptatibus est, necessitatibus odit accusamus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa repellat, hic laboriosam qui amet laudantium
                    voluptas? Vitae eveniet quam aliquam modi ducimus minima amet fuga quae ullam, distinctio praesentium, quibusdam dolorem, velit itaque
                    ab provident voluptatem repellendus hic qui voluptate tempora sint rerum temporibus. Sit laboriosam, iusto, porro facilis minus beatae accusamus dolore repellendus veniam quisquam adipisci recusandae. Architecto ipsum, voluptas similique, blanditiis, impedit quasi deserunt voluptatibus id doloremque sit alias dolorem hic autem vitae nihil earum enim tempora
                    deleniti culpa! Illo accusamus, pariatur architecto dolores libero incidunt tempora molestias quam omnis obcaecati vel, nemo accusantium veritatis repellat vero!</p>
            </div>

            <button onClick={() => setScroll(true)}>
                Scroll to Top
            </button> */}

            {/* task - 18 */}

            {/* task - 19 */}

            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>

    )

}

export default Lac14_Message