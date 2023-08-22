import React, { useState } from 'react';
import "./calci.css";
const Calci = () => {

    const [inputvalue, setInputvalue] = useState('');

     function display(value) 
     {
       setInputvalue (inputvalue +  value) 
     };
     function calculate  ()
      {

       //setInputvalue(eval(inputvalue));
        var result = eval(inputvalue)
        setInputvalue(result)
     }

     function clear ()
     {
        setInputvalue(" ")
     }
    return (
        <div className= "Headers">     
            
            <h1>Hello Calci</h1>
            <div className="button">
            <table className='table'>
                <input type='text' placeholder='input' value={inputvalue}></input>
                <button onClick={() => clear(' ')}>clear</button>
                <button onClick={() => {calculate()}}>=</button>
                 
                    <tr>
                       <button onClick={() => display('+')}>+</button>
                        <button onClick={() => display('-')}>-</button>
                        <button onClick={() => display('*')}>*</button>
                        <button onClick={() => display('/')}>/</button>
                        <button onClick={() => display('.')}>.</button> 
                      
                    </tr>
                    <tr>
                    <button onClick={() => display('1')}>1</button>
                    <button onClick={() => display('2')}>2</button>
                    <button onClick={() => display('3')}>3</button>
                    <button onClick={() => display('4')}>4</button>
                    <button onClick={() => display('5')}>5</button>
                    </tr>
                    <tr>
                    <button onClick={() => display('6')}>6</button>
                    <button onClick={() => display('7')}>7</button>
                     <button onClick={() => display('8')}>8</button>
                    <button onClick={() => display('9')}>9</button>
                    <button onClick={() => display('0')}>0</button>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Calci;
