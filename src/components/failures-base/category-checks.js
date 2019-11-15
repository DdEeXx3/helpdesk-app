import React from 'react';
import {connect} from 'react-redux';
import {handleCurrentCategory} from '../../redux/actions/tips';

class CategoryChecks extends React.Component {

    handleCurrentCategory = () => {
        for (var i=1; i<7; i++) {
            if (document.getElementById(`subcategory-radio-${i}`)) {
                document.getElementById(`subcategory-radio-${i}`).checked = false;
            }
        }
        this.props.handleCurrentCategory(this.props.category);
    }

    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="text-left col-lg-8 col-md-8 col-sm-8">
                    <h5>{`${this.props.category[0].toUpperCase()}${this.props.category.slice(1)}`}:</h5>
                </div>
                <div className="text-left col-lg-4 col-md-4 col-sm-4">
                    <label className="switch">
                        <input id={`category-radio-${this.props.id}`} type="radio" name={this.props.section} value={this.props.category} onChange = {() => this.props.handleCurrentCategory(this.props.category)} onClick={() => this.handleCurrentCategory()}></input>
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
    handleCurrentCategory: (category) => dispatch(handleCurrentCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryChecks);