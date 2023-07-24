import React from 'react';
import Banner from './Banner';
import SearchField from '../../Components/SearchField';
import PopularColleges from './PopularColleges';
import Gallary from './Gallary';
import ResearchPaper from './ResearchPaper';

const Home = () => {
    return (
        <div>
            {/* <SearchField></SearchField> */}
            <Banner></Banner>
            <PopularColleges></PopularColleges>
            <Gallary></Gallary>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;