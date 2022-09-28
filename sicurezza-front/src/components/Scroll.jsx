import { useEffect } from "react";

const Scroll = () => {
  const printScroll = () => {
    console.log("Scroll Position Y:", window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", printScroll);

    return () => {
      document.removeEventListener("scroll", printScroll);
    };
  }, []);

  return (
    <div style={{ height: "2000px" }}>
      <h1>Scroll...</h1>
    </div>
  );
};

export default Scroll;
