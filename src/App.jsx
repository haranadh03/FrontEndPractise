import Header from './Header';
import Card from './Card'
import './App.css';
import Student from './Student';
import User from './User.jsx';
import List from './List.jsx'
import Button from './Button.jsx'
import Profile from './profilepicture.jsx'
import Usestate from './Usestate.jsx';
import 'animate.css'

function App() {
  return (
    <>
      <Header></Header>
      <Student name="haranadh" age={23}></Student>
      <Student/>
      <div className="animate__animated animate__backInRight">
      <Card ></Card>
      </div>
      <div className='animate__animated animate__backInRight'>
      <Card></Card>
      </div>
      <User isLoggedIn={true} name='hari'></User>
      <Button></Button><br />
      <Profile></Profile>
      <Usestate />
    </>
  )
}

export default App
