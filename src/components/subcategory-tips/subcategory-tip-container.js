import React from 'react';
import {connect} from 'react-redux';
import {getCurrentTip} from '../../redux/actions/tips';
import SubcategoryRatingBox from './subcategory-rating-box';
import {LinkContainer} from 'react-router-bootstrap';

class SubcategoryTipContainer extends React.Component {

    render() {
        return (
            <div className="shadow button-small-radius margin-40px container col-lg-12 col-md-12 col-sm-12" onClick={() => this.props.getCurrentTip(this.props.tipInfo)}>
                <div className="container col-lg-8 col-md-12 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="text-center margin-3percent">{this.props.tipInfo.tytuł}</h3>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-4"></div>
                    <div className="margin-bottom-10px text-center col-lg-2 col-md-4 col-sm-4">
                        <LinkContainer to="/tip-detail"><button className="button-small button-teritary button-small-radius button-hover-right">Zobacz ></button></LinkContainer>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-4"></div>
                </div>
                <div className="container col-lg-4 col-md-12 col-sm-12">
                    <SubcategoryRatingBox tipInfo={this.props.tipInfo}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
})

const mapStateToDispatch = dispatch => ({
    getCurrentTip: (currentTip) => dispatch(getCurrentTip(currentTip)),
})

export default connect(mapStateToProps, mapStateToDispatch)(SubcategoryTipContainer);