import 'animate.css';

function User(props){
    return(
        props.isLoggedIn ? <h1 className="animate__animated animate__backInRight">welcome {props.name}</h1>: <h1>please login </h1>
    );
}
export default User