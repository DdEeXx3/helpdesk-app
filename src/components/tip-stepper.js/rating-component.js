import React from 'react';
import {connect} from 'react-redux';
import {rateUp, rateDown} from '../../redux/actions/tips';


class RatingComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 margin-top-50px"></div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <h3 className="bold input-font-teritary">{this.props.tip.tytuł}</h3>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="shadow margin-40px container button-small-radius col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 margin-top-20px">
                        <h4 className="bold">Czy ta porada była pomocna?</h4>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className="bold">Oceń:</h4>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="rating-container rating-up button text-center rating-container col-lg-4 col-md-4 col-sm-4" onClick={() => this.props.rateUp(this.props.tip.ocenyPozytywne, this.props.tip.id)}>
                        <i class="the-biggest far fa-thumbs-up"></i>
                    </div>
                    <div className="rating-container rating-down button text-center rating-container col-lg-4 col-md-4 col-sm-4" onClick={() => this.props.rateDown(this.props.tip.ocenyNegatywne, this.props.tip.id)}>
                        <i class="the-biggest far fa-thumbs-down"></i>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="margin-bottom-20px col-lg-12 col-md-12 col-sm-12"></div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
})

const mapStateToDispatch = dispatch => ({
    rateUp: (ratesUp, id) => dispatch(rateUp(ratesUp, id)),
    rateDown: (ratesDown, id) => dispatch(rateDown(ratesDown, id))
})

export default connect(mapStateToProps, mapStateToDispatch)(RatingComponent);