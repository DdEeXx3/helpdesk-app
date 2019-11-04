import React from 'react';
import {connect} from 'react-redux';
import {addParagraph, handleStepTitle, handleStepImageUrl, handleParagraph} from '../../redux/actions/tips-form';
import tools from '../../assets/images/tools-logo.png';

class FormStepBox extends React.Component {

    imageExists = (image_url) => {
        var http = new XMLHttpRequest();
        http.open('HEAD', image_url, false);
        http.send();
        return (http.status != 404);
    }

    render() {
        return (
            <div className="container col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-12 col-md-12 col-sm-12 container shadow margin-40px padding-20px input-small-radius">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <input className="input input-medium-80 input-small-radius input-style2-secondary" type="text" placeholder={`${this.props.index + 1}. Tytuł porady...`} onChange={(e) => this.props.handleStepTitle(e, this.props.index)}></input>
                        <h6 className="text-center input-font-error">{this.props.tipsForm.stepsValidation[this.props.index].tytuł ? '' : 'Tytuł musi zawierać co najmniej 5 znaków!'}</h6>
                    </div>
                    <div className="margin-top-auto margin-bottom-auto col-lg-8 col-md-12 col-sm-12">
                        {this.props.krok.tekst.map((paragraf, index) => {
                            return <div>
                                    <input className="input input-medium-80 input-style1-secondary" type="text" placeholder="Paragraf..." onChange={(e) => this.props.handleParagraph(e, this.props.index, index)}></input>
                                    <h6 className="text-center input-font-error">{this.props.tipsForm.stepsValidation[this.props.index].tekst[index].paragraf ? '' : 'Paragraf musi zawierać co najmniej 10 znaków!'}</h6>
                                </div>
                                    
                        })}
                        <div className="text-center">
                            <button className="button-small button-small-radius button-teritary button-hover-shadow-teritary" onClick={() => this.props.addParagraph(this.props.index)}>Dodaj paragraf<i className="margin-left-5px fas fa-plus-circle"></i></button>
                        </div>
                    </div>
                    <div className="text-center margin-top-auto margin-bottom-auto col-lg-4 col-md-12 col-sm-12">
                        <img className="button-small-radius width-80percent" src={this.imageExists(this.props.tipsForm.kroki[this.props.index].imgUrl) ? this.props.tipsForm.kroki[this.props.index].imgUrl : tools}></img>
                        <input class="input-medium-80 input-style1-secondary" type="text" placeholder="Adres URL zdjęcia..." onChange={(e) => this.props.handleStepImageUrl(e, this.props.index)}></input>
                        <h6 className="text-center input-font-error">{this.props.tipsForm.stepsValidation[this.props.index].imgUrl ? '' : 'Niepoprawny adres URL zdjęcia!'}</h6>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tips: state.tips,
    tipsForm: state.tipsForm
});

const mapDispatchToProps = dispatch => ({
    addParagraph: (index) => dispatch(addParagraph(index)),
    handleStepTitle: (e, index) => dispatch(handleStepTitle(e, index)),
    handleStepImageUrl: (e, index) => dispatch(handleStepImageUrl(e, index)),
    handleParagraph: (e, stepIndex, textIndex) => dispatch(handleParagraph(e, stepIndex, textIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormStepBox);