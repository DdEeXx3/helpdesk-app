import React from 'react';
import FormCategoryChecks from './form-category-checks';
import FormSubcategoryChecks from './form-subcategory-checks';
import {connect} from 'react-redux';

class FormCategoryBox extends React.Component {
    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="text-center container col-lg-4 col-md-5 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12"><h5>KATEGORIA*:</h5></div>
                    {this.props.tips.categories.map((category, index) => {
                        return <FormCategoryChecks id={index + 1} section = "kategoria" category = {category}/>
                    })}
                </div>
                <div className="text-center container col-lg-4 col-md-5 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12"><h5>PODKATEGORIA*:</h5></div>
                    {this.props.tipsForm.currentSubcategories.map((subcategory, index) => {
                        return <FormSubcategoryChecks id={index + 1} section = "podkategoria" subcategory = {subcategory}/>
                    })}
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center input-font-teritary bold" style={{"display": this.props.tipsForm.subcategoryMessageStatus}}>
                        <h5>WYBIERZ NAJPIERW KATEGORIĘ!</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12"></div>
                <div className="col-lg-4 col-md-5 col-sm-12 text-center">
                    <h6 className="text-center input-font-error" style={this.props.tipsForm.subcategoryValidationVisibility ? {display: "block"} : {display: "none"}}>{this.props.tipsForm.subcategoryValidation ? '' : 'Zaznacz pole podkategoria!'}</h6>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips,
    tipsForm: state.tipsForm
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FormCategoryBox);