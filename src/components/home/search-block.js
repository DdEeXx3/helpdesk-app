import React from 'react';

class SearchBlock extends React.Component {
    render() {
        return (
            <div className="container col-lg-6 col-md-8 col-sm-10 shadow button-small-radius margin-top-10percent margin-bottom-10percent">
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-10 col-md-10 col-sm-10">
                    <h4 className="padding-top-5percent text-center">Twoja usterka nie pasuje do żadnej kategorii? Wyszukaj ją poniżej!</h4>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <input type="text" className="search-input input-medium-80 input-style2-secondary input-medium-radius" placeholder="Wpisz co się dzieje..."></input>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
                <div className="text-center col-lg-4 col-md-6 col-sm-8">
                    <button className="button-medium button-small-radius button-teritary button-hover-right">
                        <span>
                            <i className="padding-right-10px fas fa-search"></i>
                            <span>SZUKAJ</span>
                            <i class="padding-left-10px fas fa-chevron-right"></i>
                        </span>
                    </button>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
            </div>
        );
    }
}

export default SearchBlock;