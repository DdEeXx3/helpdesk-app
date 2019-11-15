import React from 'react';

import bathtub from '../../assets/images/bathtub.png';
import gauge from '../../assets/images/gauge.png';
import homeTheater from '../../assets/images/home-theater.png';
import paintRoller from '../../assets/images/paint-roller.png';
import sofa from '../../assets/images/sofa.png';
import stove from '../../assets/images/stove.png';

import pipe from '../../assets/images/bathroom/pipe.png';
import shower from '../../assets/images/bathroom/shower.png';
import toilet from '../../assets/images/bathroom/toilet.png';
import washBasin from '../../assets/images/bathroom/wash-basin.png';
import washingMachine from '../../assets/images/bathroom/washing-machine.png';
import iron from '../../assets/images/electronics/iron.png';
import laptop from '../../assets/images/electronics/laptop.png';
import speaker from '../../assets/images/electronics/speaker.png';
import tv from '../../assets/images/electronics/tv.png';
import vacuumCleaner from '../../assets/images/electronics/vacuum-cleaner.png';
import armchair from '../../assets/images/furnishings/armchair.png';
import bed from '../../assets/images/furnishings/bed.png';
import carpet from '../../assets/images/furnishings/carpet.png';
import lamp from '../../assets/images/furnishings/lamp.png';
import wardrobe from '../../assets/images/furnishings/wardrobe.png';
import dishwasher from '../../assets/images/kitchen/dishwasher.png';
import faucet from '../../assets/images/kitchen/faucet.png';
import fridge from '../../assets/images/kitchen/fridge.png';
import microvawe from '../../assets/images/kitchen/microwave.png';
import oven from '../../assets/images/kitchen/oven.png';
import internet from '../../assets/images/media/internet.png';
import airConditioner from '../../assets/images/media/air-conditioner.png';
import light from '../../assets/images/media/light.png';
import tap from '../../assets/images/media/tap.png';
import valve from '../../assets/images/media/valve.png';
import drill from '../../assets/images/renovation/drill.png';
import paint from '../../assets/images/renovation/paint.png';
import tiles from '../../assets/images/renovation/tiles.png';
import tools from '../../assets/images/renovation/tools.png';
import wallpaper from '../../assets/images/renovation/wallpaper.png';
import more from '../../assets/images/more.png';

class CategoryInfoBox extends React.Component {

    categoryIconMatch = () => {
        switch(this.props.tipInfo.kategoria) {
            case "elektronika":
                return homeTheater;
            case "wyposażenie":
                return sofa;
            case "łazienka":
                return bathtub;
            case "kuchnia":
                return stove;
            case "remont":
                return paintRoller;
            case "media":
                return gauge;
            default:
                return "";
        }
    };

    subcategoryIconMatch = () => {
        switch(this.props.tipInfo.podkategoria) {
            case "telewizja_i_rtv":
                return tv;
            case "komputer":
                return laptop;
            case "audio":
                return speaker;
            case "duże_agd":
                return vacuumCleaner;
            case "małe_agd":
                return iron;
            case "meble_tapicerowane":
                return armchair;
            case "meble_drewniane":
                return wardrobe;
            case "łóżka":
                return bed;
            case "oświetlenie":
                return lamp;
            case "dekoracje":
                return carpet;
            case "toaleta":
                return toilet;
            case "umywalka":
                return washBasin;
            case "prysznic_wanna":
                return shower;
            case "pralka":
                return washingMachine;
            case "rury":
                return pipe;
            case "lodówka":
                return fridge;
            case "kuchenka":
                return oven;
            case "zmywarka":
                return dishwasher;
            case "mikrofalówka":
                return microvawe;
            case "zlew":
                return faucet;
            case "malowanie":
                return paint;
            case "tapetowanie":
                return wallpaper;
            case "kafelkowanie":
                return tiles;
            case "montaż":
                return drill;
            case "wykończenie":
                return tools;
            case "prąd":
                return light;
            case "woda":
                return tap;
            case "gaz":
                return valve;
            case "temperatura":
                return airConditioner;
            case "internet":
                return internet;  
            case "inne":
                return more;
            default:
                return "";
        }
    }
    
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 container">
                <div className="col-lg-3 col-md-2 col-sm-2"></div>
                <div className="col-lg-2 col-md-2 col-sm2 text-center width-50percent input-background-teritary button-oval">
                    <img className="width-50percent padding-20percent" src={this.categoryIconMatch(this.props.tipInfo.kategoria)} />
                </div>
                <div className="margin-bottom-auto margin-top-auto text-center col-lg-2 col-md-4 col-sm-4">
                    <i class="input-font-teritary fas fa-arrow-right"></i>
                </div>
                <div className="col-lg-2 col-md-2 col-sm2 text-center width-50percent input-background-teritary button-oval">
                    <img className="width-50percent padding-20percent" src={this.subcategoryIconMatch(this.props.tipInfo.podkategoria)} />
                </div>
                <div className="col-lg-3 col-md-2 col-sm-2"></div>

                <div className="col-lg-3 col-md-1 col-sm-1"></div>
                <div className="text-center col-lg-2 col-md-4 col-sm-4">
                    <h5>{this.props.tipInfo.kategoria.toUpperCase()}</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="text-center col-lg-2 col-md-4 col-sm-4">
                    <h5>{this.props.tipInfo.podkategoria.toUpperCase().replace(/_/g, " ")}</h5>
                </div>
                <div className="col-lg-5 col-md-1 col-sm-1"></div>
            </div>
        );
    }
}

export default CategoryInfoBox;