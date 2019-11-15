import React from 'react';
import CategoryHeader from '../catgory-header';
import CategoryContainer from '../../home/category-container';

import drill from '../../../assets/images/renovation/drill.png';
import paint from '../../../assets/images/renovation/paint.png';
import tiles from '../../../assets/images/renovation/tiles.png';
import wallpaper from '../../../assets/images/renovation/wallpaper.png';
import tools from '../../../assets/images/renovation/tools.png';
import more from '../../../assets/images/more.png';
import BackButton from '../back-button';

const categoryDetails= [
    {
        imageCode: "renovation-background-1-1",
        image: paint,
        name: "MALOWANIE",
        link: "remont/malowanie"
    },
    {
        imageCode: "renovation-background-1-2",
        image: wallpaper,
        name: "TAPETOWANIE",
        link: "remont/tapetowanie"
    },
    {
        imageCode: "renovation-background-2-1",
        image: tiles,
        name: "KAFELKOWANIE",
        link: "remont/kafelkowanie"
    },
    {
        imageCode: "renovation-background-2-2",
        image: drill,
        name: "MONTAŻ",
        link: "remont/montaż"
    },
    {
        imageCode: "renovation-background-3-1",
        image: tools,
        name: "WYKOŃCZENIE",
        link: "remont/wykończenie"
    },
    {
        imageCode: "renovation-background-3-2",
        image: more,
        name: "INNE",
        link: "remont/inne"
    }
];

class Renovation extends React.Component {
    render() {
        return (
            <div className="container">
                <CategoryHeader categoryName="REMONT"/>
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

export default Renovation;