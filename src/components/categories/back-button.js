import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

class BackButton extends React.Component {
    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-5 col-md-4 col-sm-3"></div>
                <div className="text-center col-lg-2 col-md-4 col-sm-6">
                    <LinkContainer exact to="/">
                        <button className="button-medium button-teritary button-small-radius button-hover-left"><span><i class="padding-right-10px fas fa-arrow-circle-left"></i></span>Powrót</button>
                    </LinkContainer>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-3"></div>
            </div>
        );
    }
}

export default BackButton;