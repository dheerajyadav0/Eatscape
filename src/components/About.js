import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Componentdidmount");
        //api call
    }
    render(){
        console.log("parent Render");
        return(
            <div>
            <h1>About Us</h1>
            <h2>Welcome to BeFoodie, where every bite tells a story. Our mission is simple: to bring people together through the universal language of food. From delectable dishes to tantalizing treats, our app is designed to inspire and empower your culinary creativity. With intuitive features and a sleek interface, navigating through recipes, sharing your own creations, and connecting with fellow food enthusiasts has never been easier. Whether you're seeking quick weeknight dinners, indulgent desserts, or innovative cuisine from around the globe, BeFoodie is your trusted companion on your gastronomic journey. Join us and let's embark on a flavorful adventure together. Bon appétit! 🍽️🌟</h2>
            <User name={"Dheeraj march"}/>
            <UserClass name ={"Dheeraj may"} location={"Dheradhun"}/>
        </div>

        )
    }
}


// const About = ()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h2>Welcome to BeFoodie, where every bite tells a story. Our mission is simple: to bring people together through the universal language of food. From delectable dishes to tantalizing treats, our app is designed to inspire and empower your culinary creativity. With intuitive features and a sleek interface, navigating through recipes, sharing your own creations, and connecting with fellow food enthusiasts has never been easier. Whether you're seeking quick weeknight dinners, indulgent desserts, or innovative cuisine from around the globe, BeFoodie is your trusted companion on your gastronomic journey. Join us and let's embark on a flavorful adventure together. Bon appétit! 🍽️🌟</h2>
//             <User name={"Dheeraj march"}/>
//             <UserClass name ={"Dheeraj may"} location={"Dheradhun"}/>
//         </div>
//     )
// }
export default About;