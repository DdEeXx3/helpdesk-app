import React from 'react';
import CategoryHeader from '../catgory-header';
import CategoryContainer from '../../home/category-container';

import airConditioner from '../../../assets/images/media/air-conditioner.png';
import internet from '../../../assets/images/media/internet.png';
import light from '../../../assets/images/media/light.png';
import tap from '../../../assets/images/media/tap.png';
import valve from '../../../assets/images/media/valve.png';
import more from '../../../assets/images/more.png';
import BackButton from '../back-button';

const categoryDetails= [
    {
        imageCode: "media-background-1-1",
        image: light,
        name: "PRĄD",
        link: "media/prąd"
    },
    {
        imageCode: "media-background-1-2",
        image: tap,
        name: "WODA",
        link: "media/woda"
    },
    {
        imageCode: "media-background-2-1",
        image: valve,
        name: "GAZ",
        link: "media/gaz"
    },
    {
        imageCode: "media-background-2-2",
        image: airConditioner,
        name: "TEMPERATURA",
        link: "media/temperatura"
    },
    {
        imageCode: "media-background-3-1",
        image: internet,
        name: "INTERNET",
        link: "media/internet"
    },
    {
        imageCode: "media-background-3-2",
        image: more,
        name: "INNE",
        link: "media/inne"
    }
];

class Media extends React.Component {
    render() {
        return (
            <div className="container">
                <CategoryHeader categoryName="MEDIA"/>
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

export default Media;