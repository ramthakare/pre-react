import React,{Component} from "react";
import { connect } from "react-redux";

class CourseList extends Component{
    render(){
        console.log(this.props.couresList);
    return(
        <>
        <h1>couresList</h1>
        <table className={"table"}>
            <thead>
            <tr>
            <th>Sr.No</th>
            <th>CourseName</th>
            <th>CouresFee</th>
            <th>Option</th>
            </tr>
            </thead>
            <tbody>
                {this.props.couresList.map((course,index) =>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{course.courseName}</td>
                            <td>{course.courseFees}</td>
                            <td><button className="btn btn-danger"onClick={() =>{
                                this.props.deleteCourseByIndex(index);
                            }}></button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}
}
const mapStateToProps =(state) =>{
    return{
        couresList:state.couresList,
    };

};

const mapDispatchToProps =(dispatch) =>{
    return{
        deleteCourseByIndex:(index) => dispatch({type : "FROM_DELETE",payload:index}),
    };

};

export default connect(mapStateToProps,mapDispatchToProps)(CourseList);