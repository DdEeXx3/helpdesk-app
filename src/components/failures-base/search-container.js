import React from 'react';
import FilterBox from './filter-box';
import SearchBox from './search-box';
import {connect} from 'react-redux';
import {showSearchBox, showFilterBox, handleSearch} from '../../redux/actions/tips';

class SearchContainer extends React.Component {
    render() {
        return (
            <div className="shadow margin-40px button-small-radius container col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="margin-top-20px margin-bottom-20px col-lg-8 col-md-10 col-sm-12">
                    <input type="text" className="search-input input-medium-80 input-style2-secondary input-small-radius" placeholder="Wyszukaj problem..." onChange={(e) => this.props.handleSearch(e)} value={this.props.tips.searchValue}></input>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className={`filter-box ${this.props.tips.filterSearchVisibility.filterButton} text-center col-lg-4 col-md-5 col-sm-6`} onClick = {() => this.props.showFilterBox()}>
                    <i class="fas fa-filter"></i>
                    <h5>FILTRUJ</h5>
                </div>
                <div className={`filter-box ${this.props.tips.filterSearchVisibility.searchButton} text-center col-lg-4 col-md-5 col-sm-6`} onClick = {() => this.props.showSearchBox()}>
                    <i class="fas fa-sort"></i>
                    <h5>SORTUJ</h5>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
               <FilterBox />
               <SearchBox />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({
    showFilterBox: () => dispatch(showFilterBox()),
    showSearchBox: () => dispatch(showSearchBox()),
    handleSearch: (e) => dispatch(handleSearch(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);