import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

class CategoryBlock extends React.Component {
    render() {
        var categoryLink = window.location.pathname;
        if (this.props.category.link) {
            categoryLink = `/${this.props.category.link}`;
        }
        return (
            <LinkContainer to={categoryLink}>
                <div className={"shadow category-block button-small-radius " + this.props.category.imageCode + " col-lg-6 col-md-6 col-sm-6"}>
                    <div className="category-box text-center">
                        <img className="width-35percent padding-top-5percent" src={this.props.category.image}></img>
                        <p className="category-name medium padding-top-10percent">{this.props.category.name}</p>
                    </div>
                </div>
            </LinkContainer>
        );
    }
}

export default CategoryBlock;