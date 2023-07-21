import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Extras from './Components/Extras';

function App() {
  return (
    <Box>
      <Navbar />
      <Extras />
    </Box>
  );
}

export default App;
