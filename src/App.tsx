
import './App.css'
import NavBar from './components/navbar';
import { Outlet } from "react-router-dom";
import { Container } from './pages/landing/Landing.styles';
import Footer from './components/footer/Footer';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme = {
    mobile: '768px'
  }
  return (
    <ThemeProvider theme={theme} >
      <>
        <Container>
          <NavBar />
          <Outlet />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App
