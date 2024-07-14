import {useState} from "react";

const User =(props) =>{

        const [count,setCount] =useState(0);
        const [count2]=useState(1);

    return ( <div className="user-card">
        <h1>BodyCount={count}</h1>
        <h2>Name : {props.name}</h2>
        <h3>
            Location:rewari
        </h3>
        <h4>gmail:simpyad.098@gmail.com</h4>

    </div>
    )
}
export default User;