import react,{Component} from "react";
import axios from "axios";

export default class ToDo extends Component{
    state={
        todos:[],
        isEditMode:false,
        todoObj:{
            title:"",
            completed:"",
            userId:1,
        },
    };
    
        onClickHandler=(id)=>{
            axios.delete("https://jsonplaceholder.typicode.com/todos/" +id).then((response)=>{
                console.log(response);
                this.FetchMethod();
                alert("Deleted");
    
    
            });
        }
        onChangeHandler = (event) => {
            const {name,value}=event.target;
            const todoObjectCopy=this.state.todoObj;
            todoObjectCopy[name]=value;
            this.setState({todoObj:todoObjectCopy});
        };
        onEditClickHandler = (id) => {
            const editObject=this.state.todos.find((todo) => todo.id === id);
            if(editObject)
            {
                this.setState({
                    todoObj:editObject,isEditMode:true
                });
            }
        };
        resetState ()
        {
            this.setState({
                todoObj:{
                    title:"",
                    completed:"",
                    userId:1,
                },
                isEditMode:false,
            });
        }
        onCancelClickHandler = (event) =>{
            event.preventDefault();
            this.resetState();
        }
        onFormSubmitClick = (event) => {
            event.preventDefault();
            if(this.state.isEditMode)
            {
                axios.put("https://jsonplaceholder.typicode.com/todos/"+this.state.todoObj.id,this.state.todoObj)
                .then((response)=> {console.log(response);
                    this.FetchMethod();
                    alert("Updated");
                    this.resetState();
                })
            }
            else{
                console.log(this.state);
                axios.post("https://jsonplaceholder.typicode.com/todos",this.state.todoObj)
                .then((response) => {console.log(response);
                    this.FetchMethod();
                    alert("Created");
                    this.resetState();
                })
            }
        };
    render()
    {
        return(
            <>
                <h1>Hello I am In todo</h1>
                <form onSubmit={this.onFormSubmitClick}>
                    <label>Title</label>
                    <input
                        name="title"
                        value={this.state.todoObj.title}
                        onChange={this.onChangeHandler}
                    />
                    <label>Completed</label>
                    <input
                        name="completed"
                        value={this.state.todoObj.completed}
                        onChange={this.onChangeHandler}
                    />

                    <button  type="submit">{this.state.isEditMode ? "Update" : "Submit"}</button>
                    <button  onClick = {this.onCancelClickHandler}>Cancel</button>
                </form>
                {this.state.todos.map((todo,index)=>(
                    <div key={index}>
                        <div>
                        {index+1}.{todo.title}
                        </div>
                        <br/>
                        <button className="btn btn-danger" onClick={()=>{
                    this.onClickHandler(todo.id); }}>Delete</button>

                    <button className="btn btn-success" onClick={() =>{
                        this.onEditClickHandler(todo.id);
                    }}>Edit</button>

                    </div>
                    
                     ))}
                </>
        )
    }
    componentDidMount()
    {
        this.FetchMethod();
    }

    FetchMethod() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            console.log(response.data);
            this.setState({ todos: response.data });
        });
    }
}

