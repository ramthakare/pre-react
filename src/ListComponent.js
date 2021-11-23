import React,{Component} from "react";

export default class ListComponent extends Component
{
    state={
        myList:[],
         inputValue :" ",
    };
 onAdd =() =>{
    this.setState({myList : this.state.myList})
    console.log("Add on click")
       const myListCopy=this.state.myList;
       myListCopy.push(this.state.inputValue);
      this.setState({myList:myListCopy,inputValue:" "});

};
    onInputTestChange =(event)=>
    {
        console.log(event.target.value);
        this.setState({inputValue :event.target.value });
    };
    render()
    {
        // const myList=["Ram","Rushabh","Fazil","Krushna","Anil","Sunil","Satish"];
        return(
            <>
            <h1>To Do List App</h1>
            <input value={this.state.inputValue} 
            onChange={this.onInputTestChange }/> 
            <button onClick={this.onAdd}> Add

            </button>
            {this.state.myList.map((element,index)=>(
                <div key={index}>
                    {/* <h2> Inside the  List item</h2> */}
                    <div> {element}</div>
                </div>
            ))}
            </>
        );
    }
}