import React from 'react';
import Header from './components/Header';
import Basis from './components/Basis';
import PaginationBloc from './components/PaginationBloc/PaginationBloc';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <React.Fragment>
      <Header />
      <Basis />
      <PaginationBloc />
      <Footer />
    </React.Fragment>
    
  );
}
export default App;
