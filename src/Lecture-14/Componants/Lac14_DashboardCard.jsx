import { useLayoutEffect, useRef, useState } from "react";

function Lac14_DashboardCard() {
  const cardRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(cardRef.current.offsetWidth);
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        style={{
          width: "300px",
          background: "skyblue",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        Dashboard Card
      </div>

      <h3>Card Width : {width}px</h3>
    </>
  );
}

export default Lac14_DashboardCard;