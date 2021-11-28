import axios from "axios";
import react,{Component} from "react";

export default class Post extends Component{

    state={
        Post:[],
        postObject:{
            title:"",
            body:"",
            userId:1,
        },
    };
    onDeleteClickHandler =(id) =>
    {
        axios.delete("https://jsonplaceholder.typicode.com/posts/" +id).then((Response)=>
        {
            console.log(Response);
            this.fetchData();
            alert("Deleted");
        });

    }
    onChangeHandler=(event)=>
    {
        const{name,value}=event.target;
        const postObjectCopy=this.state.postObject;
        postObjectCopy[name]=value;
        this.setState({postObject:postObjectCopy});
    };
    onFromSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.postObject).then((Response)=>{
            console.log(Response);
            this.fetchData();
            alert("Created");
            this.setState({
                postObject:{
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
            <h1>I am in Post</h1>
            <form onSubmit={this.onFromSubmitClick}>
                <label>Title</label>
                <input 
                name="title"
                value={this.state.postObject.title}
                onChange={this.onChangeHandler}/>
                <br />
                 <label>Body</label>
                <input 
                name="body"
                value={this.state.postObject.body}
                onChange={this.onChangeHandler}
                />
                <br/>
                <button className="btn btn-success"type="submit">Submit</button>
            </form>
            {this.state.Post.map((Posts,index) =>(
                <div key={index}>
                    <div>
                        {index+1}.{Posts.title}

                    </div>
                    <button className="btn btn-danger"onClick={()=>{this.onDeleteClickHandler(Post.id);
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
        axios.get("https://jsonplaceholder.typicode.com/posts").then((Response) => {
            console.log(Response.data);
            this.setState({ Post: Response.data });
        });
    }
}