var createReactClass = require("create-react-class");
// const { Component } = require("react");
// class TestComponent extends Component{
//     render(){
//         return<h1>In Test Component</h1>
//     }
// }

var TestComponent = createReactClass({
  render: function () {
    return (
      <>
        <h1>In TestComponent with old way:{this.props.name}</h1>
        Count:{this.state.Count}
        <br />
        <button onClick={this.onClickHandler}>Increment</button>
      </>
    );
  },

  getInitialState: function () {
    return {
      Count: 0,
    };
  },
  onClickHandler: function () {
    this.setState({ Count: this.state.Count + 1 });
  },
});
export default TestComponent;
