import React from 'react';
import {connect} from 'react-redux';
import {filter, handleSearch, handleCurrentCategory, handleCurrentSubcategory} from '../../redux/actions/tips';
import SubcategoryTipContainer from './subcategory-tip-container';
import CategoryInfoBox from '../failures-base/category-info-box';

class SubcategoryTips extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.category);
        this.props.filter('', this.props.match.params.category, this.props.match.params.subcategory);
        this.props.handleCurrentCategory(this.props.match.params.category);
        this.props.handleCurrentSubcategory(this.props.match.params.subcategory);
    }

    goBack = () => {
        window.history.back();
    }

    render() {
        const tipInfo = {
            kategoria: this.props.match.params.category,
            podkategoria: this.props.match.params.subcategory
        }
        return (
           <div className="container">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 margin-top-5percent"></div>
                    <CategoryInfoBox tipInfo = {tipInfo} />
                    <div className="col-lg-5 col-md-4 col-sm-4"></div>
                    <div className="text-center col-lg-2 col-md-4 col-sm-4">
                        <button className="button-small button-small-radius button-teritary button-hover-left" onClick={() => this.goBack()}>{"< Powrót"}</button>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-4"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='text-center margin-top-6percent'>Znajdź swoją usterkę:</h4>
                        <div className="text-center">
                            <input type="text" className="search-input input-medium-50 input-style2-secondary input-small-radius" placeholder="Filtruj..." onChange={(e) => this.props.handleSearch(e)} value={this.props.tips.searchValue}></input>
                        </div>
                        {this.props.tips.currentTips.map(tip => {
                            return <SubcategoryTipContainer tipInfo = {tip}/>
                        })}
                        <div className="col-lg-12 col-md-12 col-sm-12 margin-top-20px"></div>
                        <div className={`error-message ${this.props.tips.errorMessageClass} input-small-radius padding-20px shadow margin-left-30percent margin-right-30percent margin-bottom-4percent text-center input-background-teritary`}>
                            <i className="medium margin-left-4percent margin-right-4percent fas fa-search-minus"></i>
                            <span className="medium-small">Nic nie znaleziono!</span>
                        </div>
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
    filter: (search, category, subcategory) => dispatch(filter(search, category, subcategory)),
    handleSearch: (e) => dispatch(handleSearch(e)),
    handleCurrentCategory: (category) => dispatch(handleCurrentCategory(category)),
    handleCurrentSubcategory: (subcategory) => dispatch(handleCurrentSubcategory(subcategory))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryTips);