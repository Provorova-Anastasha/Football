import React from 'react';
import Header from '../../components/Header/Header';
// import LeagueCalendar from '../../components/LeagueCalendar/LeagueCalendar';
import TableCalendar from '../../components/TableCalendar/TableCalendar';
import Footer from '../../components/Footer/Footer';


const CompetitionCalendar = () => {
    return (
    <React.Fragment>
      <Header />
      {/* <LeagueCalendar /> */}
      <TableCalendar />
      <Footer />
    </React.Fragment>
    )
}
export default CompetitionCalendar;