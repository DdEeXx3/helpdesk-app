import React from 'react';
import CategoryHeader from '../catgory-header';
import CategoryContainer from '../../home/category-container';

import tv from '../../../assets/images/electronics/tv.png';
import laptop from '../../../assets/images/electronics/laptop.png';
import speaker from '../../../assets/images/electronics/speaker.png';
import vacuumCleaner from '../../../assets/images/electronics/vacuum-cleaner.png';
import iron from '../../../assets/images/electronics/iron.png';
import more from '../../../assets/images/more.png';
import BackButton from '../back-button';

const categoryDetails= [
    {
        imageCode: "electronics-background-1-1",
        image: tv,
        name: "TELEWIZJA I RTV",
        link: "elektronika/telewizja_i_rtv"
        
    },
    {
        imageCode: "electronics-background-1-2",
        image: laptop,
        name: "KOMPUTER",
        link: "elektronika/komputer"
    },
    {
        imageCode: "electronics-background-2-1",
        image: speaker,
        name: "AUDIO",
        link: "elektronika/audio"
    },
    {
        imageCode: "electronics-background-2-2",
        image: vacuumCleaner,
        name: "DUŻE AGD",
        link: "elektronika/duże_agd"
    },
    {
        imageCode: "electronics-background-3-1",
        image: iron,
        name: "MAŁE AGD",
        link: "elektronika/małe_agd"
    },
    {
        imageCode: "electronics-background-3-2",
        image: more,
        name: "INNE",
        link: "elektronika/inne"
    }
];

class Electronics extends React.Component {
    render() {
        return (
            <div className="container">
                <CategoryHeader categoryName="ELEKTRONIKA"/>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12">
                    <CategoryContainer categoryDetails = {categoryDetails} />
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-12 col-md-12 col-sm-12 margin-top-30px"></div>
                <BackButton />
                <div className="col-lg-12 col-md-12 col-sm-12 margin-bottom-30px"></div>
            </div>
        );
    }
}

export default Electronics;