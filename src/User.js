import React,{Component} from "react";
import axios from "axios";

export default class User extends Component{

    state ={
         user:[],
         isEditMode:false,
         userObject:{
            name:"",
            username:"",
            userId:1,
            },

    }
    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" +id).then((response)=>{
        console.log(response);
        this.fetchData();
        alert("Deleted");
        });
        };
        onEditClickHandler=(id)=>{
            //get specific object by id from the list
            const editObject= this.state.user.find((user)=>user.id===id);
            
            //set the object to state.postObject
            this.setState({userObject:editObject, isEditMode: true})
            };
            onCancelClickHandler=(event)=>{
                event.preventDefault();
                
                this.setState({
                userObject:{
                name:"",
                username:"",
                userId:1,
                },
                isEditMode:false,
                });
                
                };
                onChangeHandler=(event)=>{
                    const{name, value}=event.target;
                    const userObjectCopy=this.state.userObject;
                    userObjectCopy[name]=value;
                    this.setState({userObject:userObjectCopy})
                    }
                    onFormSubmitClick=(event)=>{
                        event.preventDefault();
                        console.log(this.state);
                        
                        if(this.state.isEditMode){
                        //edit
                        axios.put("https://jsonplaceholder.typicode.com/users/" + this.state.userObject.id, this.state.userObject).then(
                        (response)=>{
                        console.log(response);
                        this.fetchData();
                        alert("Updated");
                        this.resetState();
                        }
                        )
                        }else{
                        //save
                        axios.post("https://jsonplaceholder.typicode.com/users", this.state.userObject).then((response)=>{
                        console.log(response);
                        this.fetchData();
                        alert("Created");
                        this.setState({userObject:{
                        name:"",
                        username:"",
                        }})
                        })
                        
                        }
                        
                        }
                        resetState() {
                            this.setState({
                            userObject: {
                            name: "",
                            username: "",
                            userId: 1,
                            },
                            isEditMode: false,
                            });
                            }
        
        

    render(){
        return(
            <>
            <h1>Hello I am In User </h1>
            <form onSubmit={this.onFormSubmitClick}>
            <label>Name</label>
            <input name="name" value={this.state.userObject.name} onChange={this.onChangeHandler}></input>
            <label>username</label>
            <input name="username" value={this.state.userObject.username} onChange={this.onChangeHandler}></input>
            <button type="submit">{this.state.isEditMode? "Update" :"Submit"}</button>
            <button onClick={this.onCancelClickHandler}>Cancel</button>
            </form>
            {this.state.user.map((user, index)=>(
            <div key={index}><div>{index+1}.{user.name}</div>
            <button className="btn btn-danger" onClick={()=>{this.onDeleteClickHandler(user.id)}}>Delete</button>
            <button className="btn btn-success" onClick={()=>{this.onEditClickHandler(user.id)}}>Edit</button>
            <br/>
            </div>
            ))}
            </>
            );
    }
    componentDidMount(){
        this.fetchData();
        }
        
        
        fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data);
        this.setState({ user: response.data });
        
        });
        }
}