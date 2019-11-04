import React from 'react';
import TipStep from './tip-step';
import StepZilla from "react-stepzilla";
import {connect} from 'react-redux';
import RatingComponent from './rating-component';

const steps =
    [
      {name: '', component: <TipStep />},
      {name: '', component: <TipStep />},
      {name: '', component: <TipStep />},
      {name: '', component: <TipStep />},
      {name: '', component: <TipStep />},
    ]

class TipStepper extends React.Component {

    constructor(props) {
        super(props);
    }

    generateSteps = () => {
        var steps = [];
        this.props.tips.currentTip.kroki.map((krok, index) => {
            var step = {name: '', component: <TipStep krok = {krok} id={index+1}/>};
            steps.push(step);
        })
        var ratingContainer = {name: '', component: <RatingComponent tip = {this.props.tips.currentTip} />};
        steps.push(ratingContainer);
        return steps;
    }

    render() {
        return (
            <div className="container">
                <div className='margin-left-10px margin-right-10px text-center col-lg-12 col-md-12 col-sm-12'>
                    <StepZilla 
                    steps={this.generateSteps()}
                    nextButtonText="Następny krok >"
                    backButtonText="< Poprzedni krok"
                    nextButtonCls="next-button button-small button-teritary button-small-radius button-hover-right"
                    backButtonCls="back-button button-small button-teritary button-small-radius button-hover-left" 
                    nextTextOnFinalActionStep="Oceń poradę >"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tips: state.tips
})

const mapStateToDispatch = dispatch => ({

})

export default connect(mapStateToProps, mapStateToDispatch)(TipStepper);