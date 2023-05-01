import React from 'react';
import Header from '../components/Header';
import LeagueCentre from '../components/LeagueCentre';
import PaginationBloc from '../components/PaginationBloc/PaginationBloc';
import Footer from '../components/Footer';


const League = () => {
    return (
    <React.Fragment>
      <Header />
      <LeagueCentre />
      <PaginationBloc />
      <Footer />
    </React.Fragment>
    )
}
export default League;
