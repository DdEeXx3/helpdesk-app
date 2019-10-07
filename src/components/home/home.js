import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="container col-lg-8 col-md-8 col-sm-8">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center padding-top-50px">
                        <h3>Czego może dotyczyć usterka, którą chcesz rozwiązać?</h3>
                        <div className="home-container col-lg-12 col-md-12 col-sm-12">
                            <img src={'/assets/images/home-background.png'} width="1000"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
        );
    }
}

export default Home;