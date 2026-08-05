import { useEffect, useState } from "react";

function Lac14_DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h3>Time : {time.toLocaleTimeString()}</h3>;
}

export default Lac14_DigitalClock;