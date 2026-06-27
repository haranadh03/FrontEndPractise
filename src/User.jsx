function User(props){
    return(
        props.isLoggedIn ? <h1>welcome {props.name}</h1>: <h1>please login </h1>
    );
}
export default User