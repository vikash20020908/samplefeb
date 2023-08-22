import React, { useState } from "react";


function Para1()  {

const myarray = [
    {
         id: 1 , name : "vinay" , age : 20 
    },
    {
        id: 2 ,name : "vikash", age : 22  
    },
    {
        id: 3 ,name : "nishad", age : 23 
    },
    {
        id: 4 ,name : "prakash", age : 25  
    }
]

const [data , setData] = useState (myarray);

function Cleararray () {
    setData([]);
}

  return (

    <> {
        data.map((curElm) => <h1  key = {curElm.id}> Name : {curElm.name} ,  Age :{curElm.age} </h1> )
    }
       <button className='btn' onClick={Cleararray}>clear</button>
    </>
  )
}

export default Para1;

