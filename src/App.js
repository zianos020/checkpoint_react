import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Desc from './comp/Desc';
import Name from './comp/Name';
import Price from './comp/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const firstName = "zaiden";

function App() {
  return (

    <div className="App">


      <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1672280783618-4f1b70d125f5?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title> <Name/> </Card.Title>
        <Card.Text>
        <Desc />
        
        </Card.Text>
        <Button variant="primary"> <Price/> </Button>
      </Card.Body>
    </Card>
    <p>Hello, {firstName? firstName : 'there'}!</p>
    {firstName && <img src="https://plus.unsplash.com/premium_photo-1672280783618-4f1b70d125f5?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" />}
    
    </div>
    
  );
}

export default App;
