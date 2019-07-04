import React,{ Component } from "react";
import ReactDOM from "react-dom";
import Taskbox from "./Taskbox";
import "./styles.css";
import "./mystyles.css";



class App extends Component{

   constructor(props)
   {
       super(props);
       this.state= {
            emptyvalue:"",
            tasktime: [],
            messagelist:["task1","task2","task3","task4"]
       }
       this.habdleinput=this.handleinput.bind(this);

       
   }

   handleinput(event)
   {
        //alert("You are here" + );
       var thevk= event.target.value;
       var copystring= this.state.messagelist;
       copystring.push(thevk)
      

        
   }

  render()
  {
    return(
      <div>
          <div className="theinputbox">
          <input type="text" value={this.state.emptyvalue} onChange={this.handleinput}></input>
          <input Type="submit" value="ADD"></input>
          </div>
          
          {this.state.messagelist.map(nlist=><Taskbox messagebox={nlist}></Taskbox>)}
      </div>
           
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
