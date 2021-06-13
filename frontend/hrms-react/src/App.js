import "semantic-ui-css/semantic.min.css";
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Navi from '../src/layouts/Navi'
import Footer from './layouts/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer className="footer" />

    </div>
  );
}

export default App;
