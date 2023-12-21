import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("setthe inteval");

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("cancel the inteval");
    };
  }, []);
  return (
    <p className="lead">
      This is the Current Time:- {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}.
    </p>
  );
};

export default CurrentTime;
