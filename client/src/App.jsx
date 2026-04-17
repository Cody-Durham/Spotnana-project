import { useEffect, useState } from "react";

function App() {
  const [picOfDay, setPicOfDay] = useState(null);
  console.log("picccc of the daaayyyyy", picOfDay);
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/people");
        const data = await res.json();

        setPicOfDay(data.url);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Testing</h1>
      <div>
        <img src={picOfDay} alt="" />
      </div>
      
    </div>
  );
}

export default App;