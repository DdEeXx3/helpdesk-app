import React from 'react';
import {connect} from 'react-redux';
import {fetchData, getCurrentTip} from '../../redux/actions/tips';
import TipContainer from './tip-container';
import SearchContainer from './search-container';

class FailuresBase extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className='text-center margin-top-6percent'>Witaj w bazie usterek!</h3>
                        <h4 className="text-center margin-bottom-6percent">Możesz tu wyszukać awarię po słowie kluczowym,a także przefiltrować lub posortować wyniki:</h4>
                        <SearchContainer />
                        {this.props.tips.tips.map(tip => {
                            return <TipContainer tipInfo = {tip}/>
                        })}
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData()),
    getCurrentTip: (currentTip) => dispatch(getCurrentTip(currentTip))
});

export default connect(mapStateToProps, mapDispatchToProps)(FailuresBase);