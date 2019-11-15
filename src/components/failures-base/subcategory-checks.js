import React from 'react';
import {connect} from 'react-redux';
import {handleCurrentSubcategory} from '../../redux/actions/tips';

class SubcategoryChecks extends React.Component {
    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="text-left col-lg-8 col-md-8 col-sm-8">
                    <h5>{`${this.props.subcategory[0].toUpperCase()}${this.props.subcategory.slice(1).replace(/_/g, " ")}`}:</h5>
                </div>
                <div className="text-left col-lg-4 col-md-4 col-sm-4">
                    <label className="switch">
                        <input id={`subcategory-radio-${this.props.id}`}type="radio" name={this.props.section} value={this.props.subcategory} onChange = {() => this.props.handleCurrentSubcategory(this.props.subcategory)} onClick={() => this.props.checkSubcategoryRadio(this.props.id)}></input>
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
    handleCurrentSubcategory: (subcategory) => dispatch(handleCurrentSubcategory(subcategory))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryChecks);