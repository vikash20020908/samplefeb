import React from "react";


function  Para () {
  return (
    <>
    <div>
      <h1>Student Details</h1>
    name: <input  type="text" placeholder="enter " className="name" 
    />
    <br/>
    class: <input  type="text" typeof="checkbox" id="new" placeholder="enter" className="class"/>
    <br/>
    Roll number: <input  type="text" id="new" placeholder="enter" className="roll"/>
    <br/>
    <ul>
    subjects 
      <li type="none">English : <input  type= "checkbox"/></li>
      <li type="none">Hindi   : <input type= "checkbox" /></li>
     <li  type="none">Science : <input type= "checkbox" /></li>
     <li  type="none">Maths   : <input type= "checkbox" /></li>
     </ul>
    <br/>
    <button onClick={Dummy}>click me </button>
    </div> 
 
    </>
   )
}
function Dummy () {
  alert("Form filled successfully")
}
export default Para;


























// import React, { useState } from 'react'

// function Para  () {


//   const [count , setCount] = useState(0) ;

//   function handleClick () {
//     setCount (count + 1);
//   }
//   return (
//     <div>
//       <h1>Here is counter  </h1>
//        <Mybuttom count = {count} onClick ={handleClick}/>
//        <br/>
//        <Mybuttom count = {count} onClick ={handleClick}/>
//        <button className="square">
//         X
//        </button>
//     </div>
//   )
// }

// function Mybuttom ( {count , onClick}) {
//    return (
//     <button onClick={onClick}>
//       for increse {count} click here 
//     </button>

//   )
//    }



// export default Para;


//class Para extends React.Component {
    //     constructor ()
    //     {
    //         super();
    //         this.state ={
    //             name:"vinkas",
    //             data :"personal"
    //         }
    //     }
    //     updateName () {
    //         this.setState ({
    //             name:"prajwal",
    //             data:"strong"
    //         })
    //     }
    //     render() {
    //         return (
    //             <div>
    //             <h2>hello wolrd  {this.state.name} </h2>
    //             <h2>data {this.state.data} </h2>
    //             <button  onClick={()=>{this.updateName()}}> update name </button>
    //             </div>
    //         )
    //     }
    // }
    
    //when we use class component in props 
        // render () {
        //     return  (
        //         <div>
        //         <h1>hello{this.props.text.name}</h1>
        //         <h1>i am from {this.props.data}</h1>       
        //         </div>
        //     )
        // )
    //functional component in props 
    //   return (
    //     <div>
    //       <h1>hello vinay {props.name.city} </h1>
    //       <h1>hello vinay {props.data} </h1>
    //     </div>
    //   )
    //}
