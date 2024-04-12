import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import './Styles.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
      </Router>
    </>
  );
}

export default App;
