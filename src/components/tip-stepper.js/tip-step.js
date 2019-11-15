import React from 'react';
import {connect} from 'react-redux';
import tollsLogo from '../../assets/images/tools-logo.png';

class TipStep extends React.Component {

    goBack = () => {
        window.history.back();
    }

    render() {
        var tipImage = this.props.krok.imgUrl;
        if (this.props.krok.imgUrl === "") {
            tipImage = tollsLogo;
        }
        return (
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 margin-top-50px"></div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <h3 className="bold input-font-teritary">{this.props.tips.currentTip.tytuł}</h3>
                    <button className="button-small button-small-radius button-teritary button-hover-left" onClick={() => this.goBack()}><i class="padding-right-5px fas fa-arrow-circle-left"></i> Powrót</button>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="shadow margin-40px container button-small-radius col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 margin-top-20px">
                        <h4 className="bold">{`${this.props.id}. ${this.props.krok.tytuł}`}</h4>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        {this.props.krok.tekst.map(akapit => {
                            return <p className="margin-20px text-left justify">{akapit.paragraf}</p>
                        })}
                    </div>
                    <div className="text-center margin-top-auto margin-bottom-auto col-lg-4 col-md-12 col-sm-12">
                        <img src={tipImage} className="button-small-radius width-80percent"/>
                    </div>
                    <div className="margin-bottom-20px col-lg-12 col-md-12 col-sm-12"></div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tips: state.tips
})

const mapStateToDispatch = dispatch => ({

})

export default connect(mapStateToProps, mapStateToDispatch)(TipStep);