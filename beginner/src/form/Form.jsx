import {useState} from 'react';
function Form(){
    const[name,setName] = useState(" ");
    const[email,setEmail] = useState(" ");
    const[password,setPassword] = useState(" ");
    function handleSubmit(e){
        e.preventDefault();
        alert("submit");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h3>Name:{name}</h3> 
            <input type="text" placeholder="enter name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button type="button" onClick={()=> setName("")}>Reset Name</button>
            <h4>Email :{email}</h4>
            <input type="email" placeholder="enter email" value={email}onChange={(e)=> setEmail(e.target.value)}/>
             <button type="button" onClick={()=> setEmail("")}>Reset Email</button>
            <h4>Password:{password}</h4>
            <input type="password" placeholder="enter password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="button" onClick={()=> setPassword("")}>Reset Password</button>
            <h4>Hello {name}</h4>
            <h5>Your Email {email}</h5>
            <h5>your Password{password}</h5>
            <button type="submit">submit</button>
        </form>

    )
            
}
export default Form;