import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header />
     <Routes>
       <Route path='/' Component={Home}></Route>
       <Route path='/about' Component={About}></Route>
       <Route path='/product' Component={Product}></Route>
       <Route path='/review' Component={Review}></Route>
       <Route path='/contact' Component={Contact}></Route>
     </Routes>
     <Footer />
    </>
  );
}

export default App;
