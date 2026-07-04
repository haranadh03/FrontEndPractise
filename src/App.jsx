import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import MyComponent from './MyComponent.jsx';
import ColourPicker from './ColourPicker.jsx';
import Updater from './Updater.jsx';
import Car from './Car.jsx'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <>
      <div className='hari'>
      <Header></Header>
      <Student name="haranadh" age={23}></Student>
      <div className="animate__animated animate__backInRight">
      <Card ></Card>
      </div>
      <div className='animate__animated animate__backInRight'>
      <Card/>
      </div>
      <User isLoggedIn={false} name='Haranadh'></User>
      <Button></Button><br />
      <div  data-aos="flip-right">
      <Profile/>
      </div>
      <Usestate /><br />
      <MyComponent/>
      <ColourPicker/>
      <Updater/>
      <Car></Car>
      </div>
    </>
  )
}

export default App
