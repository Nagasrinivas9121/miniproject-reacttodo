import {useContext} from 'react'; 

import { UserContext } from '../Context/UserContext';

function Profile() {

const {user} = useContext (UserContext);

return (

<div>

<h2>profile: {user}</h2>


</div>

);

}



export default Profile ;