import { useEffect, useState } from "react";

function Lac14_WindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const resize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <h3>
            {size.width}  {size.height}
        </h3>
    );
}

export default Lac14_WindowSize;