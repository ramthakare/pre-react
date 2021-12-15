import React,{Component} from "react";
class ChildComponent extends Component()
{
    render()
    {
    const {name,age}=this.props;

    return(
        <>
        
         <h1>
            Hello ....my Name is{name} and my age is{age}
            
        </h1>
        <button>Add</button>
        </>
    )
}
}
export default ChildComponent;