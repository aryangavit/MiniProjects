import React from "react";
import ChildComponent from './ChildComponent';

const ParentComponent = () =>{
   return <div>
    <h1>Parent component</h1>
    <ChildComponent fname='aryan' age={22}/>
   </div> 
};

export default ParentComponent;