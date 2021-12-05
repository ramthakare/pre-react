import React,{Component} from "react";
import { connect } from "react-redux";
import PersonList from "./PersonList";

 class PersonAdd extends Component{
    state ={
        name:"",
        age:0,
    };
    onValueChangeHandler =(event) =>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    };

    onFromSubmitHandler =(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.addPerson(this.state);
    };
    render(){
        return(
            <>
            <h1>In Person From</h1>
            <form onSubmit={this.onFromSubmitHandler}>
                
                <div className="mb-3">
                    <label className="from-label">Name:</label>
                <input 
                className="from-control"
                name={"name"}  
                value={this.state.name}
                onChange={this.onValueChangeHandler}></input>
                </div>
                
                <div className="mb-3">
                    <label className="from-label">Age:</label>
                <input 
                className="from-control"
                name={"age"}  
                value={this.state.age}
                onChange={this.onValueChangeHandler}></input>
                </div>
<button className="btn btn-success"type="submit">Submit</button>
                </form> 
               
            </>
        )
    }
}
const mapStateToProps =(state) =>{
    return{};

};

const mapDispatchToProps =(dispatch) =>{
    return{
        addPerson:(payload) => dispatch({type : "PERSON_ADD",payload:payload}),
    };

};



    export default connect(mapStateToProps,mapDispatchToProps)(PersonAdd);
