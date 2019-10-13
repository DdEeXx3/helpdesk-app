import React from 'react';
import CategoryHeader from '../catgory-header';
import CategoryContainer from '../../home/category-container';

import armchair from '../../../assets/images/furnishings/armchair.png';
import wardrobe from '../../../assets/images/furnishings/wardrobe.png';
import lamp from '../../../assets/images/furnishings/lamp.png';
import bed from '../../../assets/images/furnishings/bed.png';
import carpet from '../../../assets/images/furnishings/carpet.png';
import more from '../../../assets/images/more.png';
import BackButton from '../back-button';

const categoryDetails= [
    {
        imageCode: "furnishings-background-1-1",
        image: armchair,
        name: "MEBLE TAPICEROWANE"
    },
    {
        imageCode: "furnishings-background-1-2",
        image: wardrobe,
        name: "MEBLE DREWNIANE"
    },
    {
        imageCode: "furnishings-background-2-1",
        image: bed,
        name: "ŁÓŻKA"
    },
    {
        imageCode: "furnishings-background-2-2",
        image: lamp,
        name: "OŚWIETLENIE"
    },
    {
        imageCode: "furnishings-background-3-1",
        image: carpet,
        name: "DEKORACJE"
    },
    {
        imageCode: "furnishings-background-3-2",
        image: more,
        name: "INNE"
    }
];

class Furnishings extends React.Component {
    render() {
        return (
            <div className="container">
                <CategoryHeader categoryName="WYPOSAŻENIE"/>
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

export default Furnishings;