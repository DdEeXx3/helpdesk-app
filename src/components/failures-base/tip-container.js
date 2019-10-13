import React from 'react';
import {connect} from 'react-redux';
import {getCurrentTip} from '../../redux/actions/tips';
import CategoryInfoBox from './category-info-box';
import RatingBox from './raiting-box';

class TipContainer extends React.Component {

    render() {
        return (
            <div className="shadow button-small-radius margin-40px container col-lg-12 col-md-12 col-sm-12" onClick={() => this.props.getCurrentTip(this.props.tipInfo)}>
                <div className="container col-lg-8 col-md-12 col-sm-12">
                    <div className="text-center col-lg-12 col-md-12 col-sm-12">
                        <h3 className="margin-3percent">{this.props.tipInfo.tytuł}</h3>
                    </div>
                    <CategoryInfoBox tipInfo={this.props.tipInfo} />
                </div>
                <div className="container col-lg-4 col-md-12 col-sm-12">
                    <RatingBox tipInfo={this.props.tipInfo}/>
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

export default connect(mapStateToProps, mapStateToDispatch)(TipContainer);