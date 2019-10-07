import React from 'react';
import NavigationLink from './navlink';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="text-center nav-default-color nav-medium">
                        <ul className="topnav" id="myTopnav">
                            <NavigationLink value="Strona główna" link="/"/>
                            <NavigationLink value="Baza usterek" link="/failures-base"/>
                            <NavigationLink value="Dodaj usterkę" link="/add-failure"/>
                            <li className="icon" onClick={() => window.responsiveNavigation()}><a href="javascript:void(0);">&#9776;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
