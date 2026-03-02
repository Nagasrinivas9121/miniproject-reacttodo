import {useState} from 'react'
 function Agecheck(){
    const[Age,setAge]=useState(0);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const [Password,setPassword]=useState("");
    return (
        <div>
            <h3>Name:</h3> 
            <input type="text" placeholder="enter name" value={name} onChange={(e)=> setName(e.target.value)}/>
            
            <h4>Email :</h4>
            <input type="email" placeholder="enter email" value={email}onChange={(e)=> setEmail(e.target.value)}/>
             <h4>Age :</h4>
            <input type="text" onChange={(e)=> setAge(e.target.value)}/>
            <button onClick={() => setAge(!Age)}> {Age ? "enter" : "back"} </button> 
            <br></br>
            <h4>Password :</h4>
          <input type="password" placeholder="enter password" value={Password} onChange={(e)=> setPassword(e.target.value)}/> 
          <button onClick={() => setPassword(!Password)}> <b>off</b> </button>
            <h4>Password:{Password}</h4>
            <h1> {Age>=18 ? "Adult" : "Minor"}</h1>  
            {Password && <p> password is visible</p>} 
        </div>
    )
 }
 export default Agecheck;