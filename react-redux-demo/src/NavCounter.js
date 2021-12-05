import React,{Component} from "react";
import{connect} from "react-redux";
// import Counter from "./Counter";

class NavCounter extends Component{
    render(){
        console.log(this.props);
        return(
            <>
           <h1>NewCounter:{this.props.counter}</h1>
           <button onClick={this.props.increment}>Increment</button>
           <button onClick={this.props.decrement}>Decrement</button>
           <button onClick={this.props.Multiplication}>Multiplication</button>


           </>
        );
    }

}

const mapStateToProps =(state) =>{
    return{
        counter:state.counter,
    };

};
const mapDispatchToProps=(dispatch) =>{
    return{
        increment:()=> dispatch({type:"increment"}),
        decrement:()=>dispatch({type:"decrement"}),
        Multiplication:()=>dispatch({type:"Multiplication"}),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(NavCounter);