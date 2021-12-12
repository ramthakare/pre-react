// import React, { Component } from "react";
// import Person from "./Person";
// import { connect } from "react-redux";

// class PersonList extends Component {
//   state = {
//     selectedObject: null,
//   };

//   onEditClickHandler = (person) => {
//     console.log("Edit", person);
//     this.setState({ selectedObject: person });
//   };

//   onValueChangeHandler = (event) => {
//     const { value, name } = event.target;
//     this.setState({
//       selectedObject: {
//         ...this.state.selectedObject,
//         [name]: value,
//       },
//     });
//   };
//   render() {
//     console.log(this.props.personList);
//     return (
//       <>
//         <h1>PersonList</h1>
//         <table className={"table"}>
//           <thead>
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Option</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.personList.map((person, index) => {
//               return (
//                 <tr key={person.id}>
//                   <td>{person.id}</td>
//                   <td>
//                     {this.state.selectedObject &&
//                     this.state.selectedObject.id === person.id ? (
//                       <input
//                         name="name"
//                         value={this.state.selectedObject.name}
//                         onChange={this.onValueChangeHandler}
//                       />
//                     ) : (
//                       person.name
//                     )}
//                   </td>
//                   <td>{person.age}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => {
//                         this.props.deletePersonByIndex(index);
//                       }}
//                     >
//                       Delete
//                     </button>
//                     {/* <button className="btn btn-warning">Edit</button> */}
//                     &nbsp; $ nbsp;
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => {
//                         this.onEditClickHandler(person);
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </td>
//                   // <td>// </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     personList: state.personList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePersonByIndex: (index) =>
//       dispatch({ type: "PERSON_DELETE", payload: index }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
import React, { Component } from "react";
import { connect } from "react-redux";
class PersonList extends Component {
  state = {
    selectObject: null,
  };

  onEditClickHandler = (person) => {
    console.log("Edit", person);
    this.setState({ selectObject: person });
  };

  onResetClickHandler = () => {
    this.setState({
      selectObject: null,
    });
  };

  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectObject: { ...this.state.selectObject, [name]: value },
    });
  };

  render() {
    console.log(this.props.personList);
    return (
      <>
        <h1>I am PersonList</h1>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th> Name</th>
              <th> Age</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personList.map((person, index) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>
                    {this.state.selectObject &&
                    this.state.selectObject.id === person.id ? (
                      <input
                        name="name"
                        value={this.state.selectObject.name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.name
                    )}
                  </td>

                  <td>
                    {this.state.selectObject &&
                    this.state.selectObject.id === person.id ? (
                      <input
                        name="age"
                        value={this.state.selectObject.age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.age
                    )}
                  </td>
                  <td>
                    {this.state.selectObject &&
                    this.state.selectObject.id === person.id ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.upDatePerson({
                              ...this.state.selectObject,
                            });
                            this.onResetClickHandler();
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            this.onResetClickHandler();
                          }}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.props.deletePersonByIndex(index)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            this.onEditClickHandler(person);
                          }}
                        >
                          edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    personList: state.personList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonByIndex: (index) =>
      dispatch({ type: "PERSON_DELETE", payload: index }),

    upDatePerson: (person) =>
      dispatch({ type: "PERSON_UPDATED", payload: person }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
