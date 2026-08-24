import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  // useEffect(() => {
  //   document.title = "Home | My Website";
  // }, []);

  return (

    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1>Home Page</h1>
      </div>
    </>
  );
}

export default Home;