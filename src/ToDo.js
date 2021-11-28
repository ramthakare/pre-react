import react,{Component} from "react";
import axios from "axios";

export default class ToDo extends Component{
    state={
        ToDo:[],
        ToDoObject:{
            title:"",
            body:"",
            userId:1,
        },
    }
    onDeleteClickHandler =(id) =>
    {
        axios.delete("https://jsonplaceholder.typicode.com/todos/" +id).then((Response)=>
        {
            console.log("Response");
            this.fetchData();
            alert("Deleted");
        });

    }
    onChangeHandler=(event)=>
    {
        const{name,value}=event.target;
        const ToDoObjectCopy=this.state.ToDoObject;
        ToDoObjectCopy[name]=value;
        this.setState({ToDoObject:ToDoObjectCopy});
    };
    onFromSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/todos",this.state.ToDoObject).then((Response)=>{
            console.log(Response);
            this.fetchData();
            alert("Created");
            this.setState({
                ToDoObject:{
                    title:"",
                    body:"",
                    userId:1,
                },

            });
        });
    };
    render()
    {
        return(
            <>
            <h1>Hello I am In ToDo</h1>
            <form onSubmit={this.onFromSubmitClick}>
                <label>Title</label>
                <input 
                name="title"
                value={this.state.ToDoObject.title}
                onChange={this.onChangeHandler}/>
                 <label>Body</label>
                <input 
                name="body"
                value={this.state.ToDoObject.body}
                onChange={this.onChangeHandler}
                />
                <button className="btn btn-success"type="submit">Submit</button>
            </form>
            {this.state.ToDo.map((Todo,index) =>(
                <div key={index}>
                    <div>
                        {index+1}.{Todo.title}
                        </div>
                    <button onClick={()=>{this.onDeleteClickHandler(ToDo.id);
            }}>Deleted</button>
                    
                    <br />

                </div>
            ))}
            </>
        );
    }
    componentDidMount()
    {
        this.fetchData();
    }

    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((Response) => {
            console.log(Response.data);
            this.setState({ ToDo: Response.data });
        });
    }
}