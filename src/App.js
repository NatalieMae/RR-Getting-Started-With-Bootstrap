
import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'



function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Nav activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/about">About Us</Nav.Link>
    </Nav.Item>
</Nav>


      <Button variant="info">Hello Neverland!</Button>{' '}
      <h1>Bootstrap Website</h1>
      
    </div>
  );
}

export default App;
