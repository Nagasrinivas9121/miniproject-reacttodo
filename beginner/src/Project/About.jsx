import {useNavigate} from 'react-router-dom'
function About(){
    const navigate =useNavigate();
    return (
        <button onClick={() => navigate("/About")}>About </button>
    );

}
export default About;