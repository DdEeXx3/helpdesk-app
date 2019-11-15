import React from 'react';
import CategoryChecks from './category-checks';
import SubcategoryChecks from './subcategory-checks';
import {connect} from 'react-redux';
import {clearCategoryFilter, filter} from '../../redux/actions/tips';


class FilterBox extends React.Component {

    checkCategoryRadio = (id) => {
        document.getElementById(`category-radio-${id}`).checked = true;
     }
    
    checkSubcategoryRadio = (id) => {
    document.getElementById(`subcategory-radio-${id}`).checked = true;
    }

    clearCategoryRadio = () => {
        for (var i=1; i < 7; i++) {
            document.getElementById(`category-radio-${i}`).checked = false;
        }
        this.props.clearCategoryFilter();
        this.props.filter(this.props.tips.searchValue, '', '');
    }

    render() {
        return (
             <div className="container col-lg-12 col-md-12 col-sm-12" style={{display: this.props.tips.filterSearchVisibility.filterBox}}>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="text-center container col-lg-4 col-md-5 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12"><h5>KATEGORIA:</h5></div>
                    {this.props.tips.categories.map((category, index) => {
                        return <CategoryChecks id={index + 1} section = "kategoria" category = {category} checkCategoryRadio={this.checkCategoryRadio}/>
                    })}
                </div>
                <div className="text-center container col-lg-4 col-md-5 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12"><h5>PODKATEGORIA:</h5></div>
                    {this.props.tips.currentSubcategories.map((subcategory, index) => {
                        return <SubcategoryChecks id={index + 1} section = "podkategoria" subcategory = {subcategory} checkSubcategoryRadio={this.checkSubcategoryRadio}/>
                    })}
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center input-font-teritary bold" style={{"display": this.props.tips.subcategoryMessageStatus}}>
                        <h5>WYBIERZ NAJPIERW KATEGORIĘ!</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="text-center col-lg-12 col-md-12 col-sm-12">
                    <button className="button-small button-teritary button-small-radius button-hover-right" onClick={() => this.clearCategoryRadio()}>Czyść ></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({
    clearCategoryFilter: () => dispatch(clearCategoryFilter()),
    filter: (search, category, subcategory) => dispatch(filter(search, category, subcategory))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);