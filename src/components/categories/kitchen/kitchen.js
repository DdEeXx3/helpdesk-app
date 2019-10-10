import React from 'react';
import CategoryHeader from '../catgory-header';
import CategoryContainer from '../../home/category-container';
import BackButton from '../back-button';

import fridge from '../../../assets/images/kitchen/fridge.png';
import oven from '../../../assets/images/kitchen/oven.png';
import dishwasher from '../../../assets/images/kitchen/dishwasher.png';
import microwave from '../../../assets/images/kitchen/microwave.png';
import faucet from '../../../assets/images/kitchen/faucet.png';
import more from '../../../assets/images/more.png';

const categoryDetails= [
    {
        imageCode: "kitchen-background-1-1",
        image: fridge,
        name: "LODÓWKA"
    },
    {
        imageCode: "kitchen-background-1-2",
        image: oven,
        name: "KUCHENKA"
    },
    {
        imageCode: "kitchen-background-2-1",
        image: dishwasher,
        name: "ZMYWARKA"
    },
    {
        imageCode: "kitchen-background-2-2",
        image: microwave,
        name: "MIKROFALÓWKA"
    },
    {
        imageCode: "kitchen-background-3-1",
        image: faucet,
        name: "ZLEW"
    },
    {
        imageCode: "kitchen-background-3-2",
        image: more,
        name: "INNE"
    }
];

class Kitchen extends React.Component {
    render() {
        return (
            <div className="container">
                <CategoryHeader categoryName="KUCHNIA"/>
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

export default Kitchen;