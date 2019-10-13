import React from 'react';
import CategoryChecks from './category-checks';
import SubcategoryChecks from './subcategory-checks';
import {connect} from 'react-redux';

class FilterBox extends React.Component {
    render() {
        return (
             <div className="container col-lg-12 col-md-12 col-sm-12" style={{display: this.props.tips.filterSearchVisibility.filterBox}}>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="text-center container col-lg-4 col-md-5 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12"><h5>KATEGORIA:</h5></div>
                    {this.props.tips.categories.map(category => {
                        return <CategoryChecks section = "kategoria" category = {category} />
                    })}
                </div>
                <div className="text-center container col-lg-4 col-md-5 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12"><h5>PODKATEGORIA:</h5></div>
                    {this.props.tips.currentSubcategories.map(subcategory => {
                        return <SubcategoryChecks section = "podkategoria" subcategory = {subcategory} />
                    })}
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center input-font-teritary bold" style={{"display": this.props.tips.subcategoryMessageStatus}}>
                        <h5>WYBIERZ NAJPIERW KATEGORIĘ!</h5>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);