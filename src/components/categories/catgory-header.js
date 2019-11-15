import React from 'react';

class CategoryHeader extends React.Component {
    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className='text-center margin-top-6percent'>Witaj w kategorii <span className="input-font-teritary bold">{this.props.categoryName}</span>! </h3>
                        <h4 className="text-center margin-bottom-6percent">Sprecyzuj, czego dotyczy twój problem:</h4>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12 "></div>
            </div>
        );
    }
}

export default CategoryHeader;