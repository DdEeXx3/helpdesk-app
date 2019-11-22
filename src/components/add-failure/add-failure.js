import React from 'react';
import {connect} from 'react-redux';
import FormCategoryBox from './form-category-box';
import FormStepBox from './form-step-box';
import {handleTitle, addStep, addNewTip} from '../../redux/actions/tips-form';

class AddFailure extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className='text-center margin-top-6percent'>Witaj w formularzu!</h3>
                        <h4 className="text-center">Możesz tu dodać nową usterkę wraz z poradami:</h4>
                        <h5 className="text-center margin-bottom-6percent">(*) - Pola obowiązkowe</h5>
                        <div className="shadow margin-40px button-small-radius container col-lg-12 col-md-12 col-sm-12">
                            <div className="col-lg-2 col-md-1 col-sm-12"></div>
                            <div className="margin-top-20px margin-bottom-20px col-lg-8 col-md-10 col-sm-12">
                                <input type="text" className="search-input input-big-80 input-style2-secondary input-small-radius input-font-teritary input-placeholder-teritary" placeholder="Tytuł usterki*" onChange={(e) => this.props.handleTitle(e)} onFocus={() => document.getElementById('title').style.display = "block"}></input>
                                <h6 id="title" className="text-center input-font-error" style={{display: "none"}}>{this.props.tipsForm.titleValidation ? '' : 'Tytuł musi zawierać co najmniej 5 znaków!'}</h6>
                            </div>
                            <div className="col-lg-2 col-md-1 col-sm-12"></div>
                        <FormCategoryBox />
                        {this.props.tipsForm.kroki.map((krok, index) => {
                            return <FormStepBox krok={krok} index={index} />
                        })}
                        <div className="text-center col-lg-12 col-md-12 col-sm-12">
                            <button className="button-small button-small-radius button-teritary button-hover-shadow-teritary" onClick={() => this.props.addStep()}>Dodaj poradę<i className="margin-left-5px fas fa-plus-circle"></i></button>
                        </div>
                        <div className="text-center col-lg-12 col-md-12 col-sm-12">
                            <button 
                            className={!this.props.tipsForm.sendButtonVisibility ? "button-medium button-small-radius button-teritary" : "button-medium button-small-radius button-teritary button-hover-right"} 
                            disabled={!this.props.tipsForm.sendButtonVisibility ? true : false} 
                            onClick={() => this.props.addNewTip(this.props.tipsForm.tytuł, this.props.tipsForm.kategoria, this.props.tipsForm.podkategoria, this.props.tipsForm.kroki)}>Wyślij formularz<i className="margin-left-5px fas fa-arrow-circle-right"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tips: state.tips,
    tipsForm: state.tipsForm
});

const mapDispatchToProps = dispatch => ({
    handleTitle: (e) => dispatch(handleTitle(e)),
    addStep: () => dispatch(addStep()),
    addNewTip: (title, category, subcategory, steps) => dispatch(addNewTip(title, category, subcategory, steps))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFailure);