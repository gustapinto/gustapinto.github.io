import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  useEffect(() => {
    document.title = 'Gustavo Pinto';
  }, []);

  return (
    <>
      <Navbar />

      <Home />
    </>
  );
}
