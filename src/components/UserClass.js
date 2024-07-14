import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);


        this.state ={
          userInfo:{
            name: "Dummy name ",
            location:"Default location",
            
          }
         };
        // console.log("child constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo:json,

        })

        console.log(json);
    }

    render(){
        console.log("child constructor");
        return(
            <div className="user-card">
            <img src={this.state.userInfo.avatar_url}/>
                <h1>Count:{this.state.userInfo.name}</h1>
                {/* <button
                    onClick={()=>{
                        //NEVER UPDATE STATE VARIALE DIRECTLY
                        this.setState({
                                count:this.state.count+1,
                        });
                    }}>Count Increase
                </button> */}
        <h2>Name :{this.state.userInfo.location}</h2>
        <h3>
            Location :{this.props.name}
        </h3>
        <h4>gmail:simpyad.098@gmail.com</h4>

    </div>
        )
    }
}
export default UserClass;