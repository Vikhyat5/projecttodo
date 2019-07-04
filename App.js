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
            messagelist:[]
       }
       //this.handlesubmit=this.handlesubmit.bind(this);
       this.handleinput=this.handleinput.bind(this);
       
      this.handlesubmit=this.handlesubmit.bind(this);
   }


  

   handleinput =(event) =>
   {
    this.setState({emptyvalue:event.target.value});
   }
   
   handlesubmit =(event) =>
   {  
      event.preventDefault();
      var temp=this.state.emptyvalue;
      if(temp!="")
      {
        var templist= this.state.messagelist;
      //alert(temp);
      templist.push(temp);
      this.setState({
       messagelist:templist,
       emptyvalue:""
        });
      }
      
     

   }
   
  


  render()
  {
    return(
      <div>
          <form className="theinputbox" onSubmit={this.handlesubmit}>
          <input type="text" value={this.state.emptyvalue} onChange={this.handleinput}></input>
          <input Type="submit"  ></input>
          </form>
          
          {this.state.messagelist.map(nlist=><Taskbox messagebox={nlist}></Taskbox>)}
      </div>
           
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
