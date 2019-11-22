import React from 'react';

class SubcategoryRatingBox extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.fillRatingBar();
    }

    fillRatingBar = () => {
        var canvasId = `rating-bar-${this.props.tipInfo.id}`,
        canvas = document.getElementById(canvasId),
        ctx = canvas.getContext('2d'),
        grd;

        if (this.props.tipInfo.ocenyPozytywne == 0 && this.props.tipInfo.ocenyNegatywne == 0) {
            var ratingUp = 0;
        }
        else {
            var ratingUp = this.props.tipInfo.ocenyPozytywne / (this.props.tipInfo.ocenyPozytywne + this.props.tipInfo.ocenyNegatywne);
        }     
        
        grd = ctx.createLinearGradient(0.000, 150.000, 300.000, 150.000);
        
        grd.addColorStop(0.000, '#3DA557');
        if (ratingUp < 0.1) {
            grd.addColorStop(0, '#3DA557');
        }
        else {
            grd.addColorStop(ratingUp - 0.1, '#3DA557');
        }
        if (ratingUp > 0.9) {
            grd.addColorStop(1, '#A83E3E');
        }
        else {
            grd.addColorStop(ratingUp + 0.1, '#A83E3E');
        }
        grd.addColorStop(1.000, '#A83E3E');
        
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 300.000, 300.000);
    }


    render() {
        return (
            <div className="width-100percent text-center margin-top-auto margin-bottom-auto container col-lg-12 col-md-12 col-sm-12">
                <h5 className="col-lg-12 col-md-12 col-sm-12 margin-top-10px">OCENA:</h5>
                <div className="container col-lg-12 col-md-12 col-sm-12">
                    <div className="text-right margin-20percent col-lg-2 col-md-2 col-sm-2">
                        <i className="input-font-success far fa-thumbs-up"></i>
                        <p className="small">{this.props.tipInfo.ocenyPozytywne}</p>
                    </div>
                    <canvas id={`rating-bar-${this.props.tipInfo.id}`} className="text-center height-10px margin-bottom-auto margin-top-auto width-100percent button-small-radius col-lg-8 col-md-8 col-sm-8"></canvas>
                    <div className="text-left margin-20percent col-lg-2 col-md-2 col-sm-2">
                        <i className="input-font-error far fa-thumbs-down"></i>
                        <p className="small">{this.props.tipInfo.ocenyNegatywne}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubcategoryRatingBox;