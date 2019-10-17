import React from 'react';
import {connect} from 'react-redux';
import {clearSortOptions} from '../../redux/actions/tips';
import SortChecks from './sort-checks';

class SearchBox extends React.Component {

    checkSortRadio = (id) => {
       document.getElementById(`sort-radio-${id}`).checked = true;
    }

    clearRadio = () => {
        for (var i=1; i <5; i++) {
            document.getElementById(`sort-radio-${i}`).checked = false;
        }
        this.props.clearSortOptions();
    }

    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12" style={{display: this.props.tips.filterSearchVisibility.searchBox}}>
                <div className="text-center col-lg-12 col-md-12 col-sm-12">
                    {this.props.tips.sortOptions.map((option, index) => {
                        return <SortChecks id={index + 1} option={option} section="sort" checkSortRadio={this.checkSortRadio}/>
                    })}
                    <button className="button-small button-teritary button-small-radius button-hover-right" onClick={() => this.clearRadio()}>Czyść ></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({
    clearSortOptions: () => dispatch(clearSortOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);