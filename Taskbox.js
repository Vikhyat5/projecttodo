import React,{ Component } from "react"
import "./mystyles.css";

class Taskbox extends Component
{ 
  
   render()
   {
     return(
       <div className="thebox">
            <div className="thetitle">Title</div>
            <div className="themessage">{this.props.messagebox}</div>
            
       </div>
     )
   }
}

export default Taskbox;
