import React,{useState,useEffect} from 'react';
import './App.css';
import Pin from "./components/Pin.jsx";

function App() {
  const [otp, setOtp] = useState("");
  const [boxLength, setBoxLength] = useState(4)

  useEffect(() => {
    document.title = "hello"

    }, [])
  return (
    <div className="App">
      <Pin length={Number(boxLength)} onChange={(value)=>{setOtp(value)}}/>

      <h1>Your Credit card Number is :{otp}</h1>
     
    </div>
  );
}

export default App;
