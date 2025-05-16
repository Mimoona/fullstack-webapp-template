
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [data, setData] = useState<string>("");

    useEffect(() => {
        axios.get("api/grocery-shop/greet")
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

  return (
    <>
        <h1>{data}</h1>

    </>
  )
}

export default App
