import React from 'react';
import {connect} from 'react-redux';
import { handleCurrentSortOption } from '../../redux/actions/tips';

class SortChecks extends React.Component {
    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="text-left col-lg-8 col-md-8 col-sm-8">
                    <h5>{this.props.option}:</h5>
                </div>
                <div className="text-right col-lg-4 col-md-4 col-sm-4">
                    <label className="switch">
                        <input id={`sort-radio-${this.props.id}`} type="radio" name={this.props.section} value={this.props.option} onChange = {() => this.props.handleCurrentSortOption(this.props.option)} onClick={() => this.props.checkSortRadio(this.props.id)}></input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({
    handleCurrentSortOption: (option) => dispatch(handleCurrentSortOption(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortChecks);