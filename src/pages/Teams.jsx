import React from 'react';
import Header from '../components/Header';
import TeamsCentre from '../components/TeamsCentre';
import PaginationBloc from '../components/PaginationBloc';
import Footer from '../components/Footer';




const Teams = () => {
    return (
    <React.Fragment>
      <Header />
      <TeamsCentre />
      <PaginationBloc />
      <Footer />
    </React.Fragment>
    )
}
export default Teams;

