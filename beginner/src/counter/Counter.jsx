import {useState,useEffect} from 'react';
function Counter(){
    const[count,setcount] = useState(0);
    useEffect(() => {
      console.log("updated count:", count);

    },[count])
        return(
        <div>
            <h2>Like count:{count}</h2>
            <button onClick={()=> setcount(count +1)}>
              Like
            </button>
            <button onClick={()=> setcount(count-1)}>
              Dislike
            </button>
            <button onClick={()=> setcount(0)}>
              Reset
            </button>
        </div>
    )
}

export default Counter;