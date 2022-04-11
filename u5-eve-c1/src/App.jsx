import "./App.css";
import {useState} from "react";


function App() {
  const [ive, setive] = useState({
    sc:76,
    wic:2,
    bal:50,
  })
  
  const handlesc = (value)=>{
    setive({...ive,sc:ive.sc+value})
  }

  const handlewic = (value)=>{
    setive({...ive,wic:ive.wic+value});
  }
  const handlebal = (value)=>{
    setive({...ive,bal:ive.bal+value});
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              ive.sc
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              ive.wic
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {/* var x = ({inv.bal}).split(".") 
            if(x[1]===5){} */}
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.

            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{handlesc(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{handlesc(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{handlesc(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{handlewic(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{handlebal(1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      let x = {ive.sc}
      {/* if(x>=100){
        <h1>India Win</h1>
      } */}
    </div>
  );
}

export default App;
