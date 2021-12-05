import React,{Component} from "react";
import CouresForm from "./CouresForm";
// import { connect } from "react-redux";
import CourseForm from "./CouresForm";
import CourseList from "./CourseList";

export default class Course extends Component{
    
    render(){
        return(
            <>
            <h1> Courese Master</h1>
            <br/>
            <div className="row">
                <div className="col-md-4">
                 <CouresForm />
                </div>
                <div className="col-md-8">
                <CourseList />
              
                </div>
            </div>
            </>
        )
    }
}
