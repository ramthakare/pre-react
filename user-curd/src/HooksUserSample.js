import axios from "axios";
import { useEffect, useState } from "react"




 export default () =>{
    const[userList,setUserList]=useState([]);
    const[name,setName]=useState("");
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");


    useEffect(() =>{
        //code to fetch deta from server
       fetchData();
     },[]
      
     );
     const fetchData =() =>{
        //code to fetch data from server
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
           console.log(response.data);
           if(response && response.data){
            setUserList(response.data);
           }
       });
    };

    const onNameChange =(event) =>{
        setName(event.target.value);
    };
    const onUserNameChange =(event) =>{
        setUserName(event.target.value);
   };

   const onEmailChange =(event) =>{
    setEmail(event.target.value);
};

const onFromSubmit =(event) =>{
    event.preventDefault();//what is
    console.log(name,userName,email);
    axios.post("https://jsonplaceholder.typicode.com/users",{
        name,
        userName,
        Id:1,
    }).then((response) =>{
        console.log(response);
        alert("Added");
        //fetch the data again
        fetchData();
        //reset form
        setName("");
        setUserName("");
        setEmail("");
    });
};

return(
    <>
    <h1>From HookSample</h1>
    <h1>User From</h1>
    <form onSubmit={onFromSubmit}>
    <label> Name: </label>
        <input name="name" value={name} onChange={onNameChange}/>
  
       <label>UserName: </label>
          <input name="userName" value={userName} onChange={onUserNameChange}/>

          <label>Email: </label>
          <input name="email" value={email} onChange={onEmailChange}/>

          <button type="submit">Submit</button>
    </form>
    <table  class="table table-success table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>City</th>
                <th>lat</th>
            </tr>
        </thead>
        <tbody>
            {userList.map((user,index) =>{
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.geo.lat}</td>
                        
                        </tr>
                );
            })}
        </tbody>
    </table>
    </>
);
   


 }