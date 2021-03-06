import React from 'react';
import {connect} from 'react-redux';
import {filter, fetchData, getCurrentTip} from '../../redux/actions/tips';
import TipContainer from './tip-container';
import SearchContainer from './search-container';

class FailuresBase extends React.Component {
    
    constructor(props) {
        super(props);
        this.props.filter(this.props.tips.searchValue, '', '');
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
                        {this.props.tips.currentTips.map((tip, index) => {
                            return <TipContainer tipInfo = {tip} index={index}/>
                        })}
                        <div className={`error-message ${this.props.tips.errorMessageClass} input-small-radius padding-20px shadow margin-left-30percent margin-right-30percent margin-bottom-4percent text-center input-background-teritary`}>
                            <i className="medium margin-left-4percent margin-right-4percent fas fa-search-minus"></i>
                            <span className="medium-small">Nic nie znaleziono!</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                {this.props.tips.loading && (<div className="text-center col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">ŁADOWANIE<div className="loader text-center"></div></div>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({
    filter: (search, category, subcategory) => dispatch(filter(search, category, subcategory)),
    fetchData: (search) => dispatch(fetchData(search)),
    getCurrentTip: (currentTip) => dispatch(getCurrentTip(currentTip))
});

export default connect(mapStateToProps, mapDispatchToProps)(FailuresBase);