import React from 'react';
import CategoryBlock from './category-block';


class CategoryContainer extends React.Component {
    render() {
        return(
            <div className="container margin-right-2percent margin-left-2percent col-lg-12 col-md-12 col-sm-12">
                {this.props.categoryDetails.map(category => {
                    return <CategoryBlock category = {category} />
                })}
            </div>
        );
    }
}

export default CategoryContainer;