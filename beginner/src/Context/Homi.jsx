import {useContext} from 'react'; 

import { UserContext } from '../Context/UserContext';

function Home() {

const {user, setUser} = useContext (UserContext);

return (

<div>

<h2>Welcome {user}</h2>

<button onClick={() => setUser("suvarna")} >

login suvarna

</button>

</div>

);

}



export default Home;