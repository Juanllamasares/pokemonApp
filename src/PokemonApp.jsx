import { BrowserRouter as Router} from "react-router-dom";
import { Container } from "react-bootstrap";
import './styles.css';
import { AppRouter } from "./router/AppRouter";


function PokemonApp() {
  return (
    <Router>
      <Container className='bg-black'>
        <AppRouter/>    
      </Container>
    </Router>
  );
}

export default PokemonApp;
