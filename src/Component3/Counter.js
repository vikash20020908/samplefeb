import React, { useState }  from "react";
import "./Counter.css"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        
        if (counter < 10){
            setCounter(counter + 1)
        }
        else  {
            setCounter(counter + 5)
        }
    }

    const handleClick2 = () => {
       if (counter > 0) 
       {setCounter(counter -1)}

    }
    const Neutral = () => {
        setCounter(0)
    }
    return (
        <div className="row ">
            <div className="col-md-5">
                <h1>React Counter</h1>
                <h1>{counter}</h1>
                <div className="button1">
                    <button className="btn btn-danger" onClick={handleClick2}>Decrement</button>
                </div>
                <div className="button2">
                    <button className="btn btn-info" onClick={Neutral}>Neutral</button>
                </div>
                <div className="button3">
                    <button className="btn btn-success" onClick={handleClick1}>Increment</button>
                </div>
            </div>
        </div>
    )
};
export default Counter;