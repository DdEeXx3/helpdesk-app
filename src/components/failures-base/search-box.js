import React from 'react';
import {connect} from 'react-redux';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12" style={{display: this.props.tips.filterSearchVisibility.searchBox}}>
                SEARCH BOX WORKS
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);