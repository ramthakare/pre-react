import React,{Component} from "react";

export default class PersonComponent extends Component
{
    state ={
        Name :"",
        Age:0,
        mobileNo:0,
        myList:[],
        inputValue:"",
       
    };
 onValueChangeHandler =(event)=>
        {
           console.log(event.target.name)
          this.setState({[event.target.name]:event.target.value });
       };
        // onAgeChangeHandler =(event)=>
        // {
            
        //     this.setState({Age                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      :event.target.value });
        // };
        onFromSubmitHandler =(event)=>
        {
            event.preventDefault();
            console.log("In Submit");
            console.log(this.state);
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        };
        onAdd=()=>{
            const copyMyList= this.state.myList;
            
            copyMyList.push(<h3>my name is{this.state.Name},my age is{this.state.Age},and my mobileNono is{this.state.mobileNo}</h3>);
            console.log("copyMyList");
            this.setState({myList:copyMyList});
            
            // copyMyList.push(this.state.Age);
            // console.log("copyMyList");
            // this.setState({myList:copyMyList});
            
            
            // copyMyList.push(this.state.mobileNo);
            // console.log("copyMyList");
            // this.setState({myList:copyMyList});
            
            };
    render()
    {
        return(
            <>
            <h1> Person From</h1>
            <form onSubmit={this.onFromSubmitHandler}>
                <label>Name:</label>
                <input name={"Name"}value={this.state.Name} 
                 onChange={this.onValueChangeHandler }/> 

                <br /> 

                <label> Age :</label>            
                <input name={'Age'} value={this.state.Age}                 
            onChange={this.onValueChangeHandler }/> 
                <br />

                <label> Mobile no : </label>
                <input name={'mobileNo'}value={this.state.mobileNo}
               onChange={this.onValueChangeHandler} />
<br />

<button onClick={this.onAdd}> Submit </button>

{this.state.myList.map((element,index)=>(
                <div key={index}>
                    {/* <h2> Inside the  List item</h2> */}
                    <div> {element}</div>
                </div>
            ))}
                
            </form>
            </>
        );
        }
}