import React,{Component} from "react";
import { connect } from "react-redux";

class CourseForm extends Component{
    state ={
        courseName:"",
        courseFees:0,
    };
    onValueChangeHandler =(event) =>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    };
    onFromSubmitHandler =(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.addCourse(this.state);
    };
    render(){
        return(
            <>
            <h1>In CourseForm</h1>
            <form onSubmit={this.onFromSubmitHandler}>
                
                <div className="mb-3">
                    <label className="from-label">CourseName:</label>
                <input 
                className="from-control"
                name={"courseName"}  
                value={this.state.courseName}
                onChange={this.onValueChangeHandler}></input>
                </div>
                
                <div className="mb-3">
                    <label className="from-label">CouresFee:</label>
                <input 
                className="from-control"
                name={"courseFees"}  
                value={this.state.courseFees}
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
        addCourse:(payload) => dispatch({type : "FROM_ADD",payload:payload}),
    };

};

export default connect(mapStateToProps,mapDispatchToProps)(CourseForm);