import { useState } from "react";

export default function Form(){
    let[formData,setFormData] = useState({
        fullName : "",
        username : "",
        password : ""
    });


let handleINputChange=(event)=>{
    setFormData((prevData)=>{
        return{
            ...prevData,
            [event.target.name] : event.target.value
        };
    });
}

let handleSubmit=(event)=>{
    event.preventDefault();
    setFormData({
        fullName : "",
        username : "",
        password : ""
    });
}

    return(

        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="FullName">Name:</label>
            <input  placeholder="Enter your name" type="text" value={formData.fullName} onChange={handleINputChange} id="FullName" name="fullName" />
<br /><br />
            <label htmlFor="username">Username:</label>
            <input  placeholder="Enter your UserName" type="text" value={formData.username} onChange={handleINputChange} id="username" name="username" />
          <br /><br />  
            <label htmlFor="password">Password:</label>
            <input  placeholder="Enter your Password" type="password" value={formData.password} onChange={handleINputChange} id="password" name="password" />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}