import React from 'react';

class RatingBox extends React.Component {
    render() {
        return (
            <div className="width-100percent text-center margin-top-auto margin-bottom-auto container col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <button className="button-small button-teritary button-small-radius button-hover-right col-lg-4 col-md-4 col-sm-4">Zobacz ></button>
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <h5 className="col-lg-12 col-md-12 col-sm-12 margin-top-10px">OCENA:</h5>
                <canvas className="text-center height-10px margin-bottom-10px width-80percent button-small-radius input-background-error col-lg-12 col-md-12 col-sm-12"></canvas>
            </div>
        );
    }
}

export default RatingBox;