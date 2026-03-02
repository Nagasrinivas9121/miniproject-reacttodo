import {useState} from 'react';
function Name(){
    const[name,setName] = useState(" ");
    const[role,setRole] = useState(" ");
    const[city,setCity] = useState(" ");
    
    return(
        <div>
            <h2>Name:{name}</h2> 
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <h2>Role:{role}</h2>
            <input type="text" onChange={(e)=> setRole(e.target.value)}/>
            <h2>City:{city}</h2>
            <input type="text" onChange={(e)=> setCity(e.target.value)}/>
            <h3>Hello {name}</h3>
            <h3>Your Role is {role}</h3>
            <h3>your City {city}</h3>

        </div>
    )
            
}
export default Name;