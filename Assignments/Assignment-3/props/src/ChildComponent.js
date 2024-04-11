import React from "react";

function ChildComponent(props){
    console.log("props: ",props);
    return <div>
        <h2>Child Component</h2>
        <p>Name: {props.fname}</p>
        <p>Age: {props.age}</p>
    </div>

}
export default ChildComponent;