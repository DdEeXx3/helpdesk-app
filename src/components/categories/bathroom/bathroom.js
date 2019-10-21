import React from 'react';
import CategoryHeader from '../catgory-header';
import CategoryContainer from '../../home/category-container';

import toilet from '../../../assets/images/bathroom/toilet.png';
import washBasin from '../../../assets/images/bathroom/wash-basin.png';
import shower from '../../../assets/images/bathroom/shower.png';
import washingMachine from '../../../assets/images/bathroom/washing-machine.png';
import pipe from '../../../assets/images/bathroom/pipe.png';
import more from '../../../assets/images/more.png';
import BackButton from '../back-button';

const categoryDetails= [
    {
        imageCode: "bathroom-background-1-1",
        image: toilet,
        name: "TOALETA",
        link: "łazienka/toaleta"
    },
    {
        imageCode: "bathroom-background-1-2",
        image: washBasin,
        name: "UMYWALKA",
        link: 'łazienka/umywalka'
    },
    {
        imageCode: "bathroom-background-2-1",
        image: shower,
        name: "PRYSZNIC/WANNA",
        link: 'łazienka/prysznic_wanna'
    },
    {
        imageCode: "bathroom-background-2-2",
        image: washingMachine,
        name: "PRALKA",
        link: 'łazienka/pralka'
    },
    {
        imageCode: "bathroom-background-3-1",
        image: pipe,
        name: "RURY",
        link: 'łazienka/rury'
    },
    {
        imageCode: "bathroom-background-3-2",
        image: more,
        name: "INNE",
        link: 'łazienka/inne'
    }
];

class Bathroom extends React.Component {
    render() {
        return (
            <div className="container">
                <CategoryHeader categoryName="ŁAZIENKA"/>
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

export default Bathroom;