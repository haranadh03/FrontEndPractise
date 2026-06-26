import Header from './Header';
import Card from './Card'
import './App.css';
import Student from './Student';

function App() {
  return (
    <>
      <Header></Header>
      <Student name="haranadh" age={23}></Student>
      <Student/>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  )
}

export default App
