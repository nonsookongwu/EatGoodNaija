
import './App.css'
import NavBar from './components/navbar';
import { Outlet } from "react-router-dom";
import { Container } from './pages/landing/Landing.styles';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Container>
        <NavBar />
        <Outlet />
      </Container>
        <Footer />
    </>
  );
}

export default App
