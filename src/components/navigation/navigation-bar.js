import React from 'react';
import NavigationLink from './navlink';
import logo from '../../assets/images/logo.png';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth});
      }

    render() {
        return (
            <div className="container text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="text-left nav-default-color nav-medium">
                        <ul className="topnav" id="myTopnav">
                            {this.state.width > 735 ? <img className="nav-logo" src={logo} /> : <span></span>}
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
