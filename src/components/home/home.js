import React from 'react';
import CategoryContainer from './category-container';
import SearchBlock from './search-block';

import homeTheater from '../../assets/images/home-theater.png';
import sofa from '../../assets/images/sofa.png';
import bathtub from '../../assets/images/bathtub.png';
import stove from '../../assets/images/stove.png';
import paintRoller from '../../assets/images/paint-roller.png';
import gauge from '../../assets/images/gauge.png';

const categoryDetails= [
    {
        imageCode: "home-1-1",
        image: homeTheater,
        name: "ELEKTRONIKA",
        link: "elektronika",
    },
    {
        imageCode: "home-1-2",
        image: sofa,
        name: "WYPOSAŻENIE",
        link: "wyposażenie"
    },
    {
        imageCode: "home-2-1",
        image: bathtub,
        name: "ŁAZIENKA",
        link: "łazienka"
    },
    {
        imageCode: "home-2-2",
        image: stove,
        name: "KUCHNIA",
        link: "kuchnia"
    },
    {
        imageCode: "home-3-1",
        image: paintRoller,
        name: "REMONT",
        link: "remont"
    },
    {
        imageCode: "home-3-2",
        image: gauge,
        name: "MEDIA",
        link: "media"
    }
];

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className='text-center margin-top-6percent margin-bottom-6percent'>Czego może dotyczyć usterka, którą chcesz rozwiązać?</h3>
                    </div>
                    <CategoryContainer categoryDetails = {categoryDetails}/>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-3 col-md-2 col-sm-1"></div>
                <SearchBlock />
                <div className="col-lg-3 col-md-2 col-sm-1"></div>
            </div>
        );
    }
}

export default Home;