const tipsForm = {
    tytuł: '',
    kategoria: '',
    podkategoria: '',
    kroki: [
        {
            tytuł: '',
            imgUrl: '',
            tekst: [
                {paragraf: ''},
            ]
        }
    ],
    currentSubcategories: [],
    subcategoryMessageStatus: 'block',
    titleValidation: true,
    subcategoryValidation: false,
    subcategoryValidationVisibility: false,
    stepsValidation: [
        {
            tytuł: true,
            imgUrl: true,
            tekst: [
                {paragraf: true}
            ]
        }
    ],
};

export const tipsFormReducer = (state = tipsForm, action) => {
    switch(action.type) {
        case "HANDLE_TITLE":
            return Object.assign({}, state, {tytuł: action.title, titleValidation: validateTitle(action.title)});
        case "HANDLE_CURRENT_FORM_CATEGORY":
            return Object.assign({}, state, {kategoria: action.category, currentSubcategories: getSubcategory(action.category), subcategoryMessageStatus: "none", subcategoryValidationVisibility: true});
        case "CLEAR_FORM_SUBCATEGORY_STATE":
            return Object.assign({}, state, {podkategoria: '', subcategoryValidation: false, subcategoryValidationVisibility: true});
        case "HANDLE_CURRENT_FORM_SUBCATEGORY":
            return Object.assign({}, state, {podkategoria: action.subcategory, subcategoryValidation: true}); 
        case "ADD_STEP":
            return Object.assign({}, state, {kroki: action.steps, stepsValidation: action.validation});
        case "ADD_PARAGRAPH":
            return Object.assign({}, state, {kroki: action.steps, stepsValidation: action.validation});
        case "HANDLE_STEP_TITLE":
            return Object.assign({}, state, {kroki: action.steps, stepsValidation: action.validation});
        case "HANDLE_STEP_IMAGE_URL":
            return Object.assign({}, state, {kroki: action.steps, stepsValidation: action.validation});
        case "HANDLE_PARAGRAPH":
            return Object.assign({}, state, {kroki: action.steps, stepsValidation: action.validation});
        default:
            return state;
    }
}

const getSubcategory = (category) => {
    if (category === "elektronika") {
        return ["telewizja_i_rtv", "komputer", "audio", "duże_agd", "małe_agd", "inne"];
    }
    else if (category === "wyposażenie") {
        return ["meble_tapicerowane", "meble_drewniane", "łóżka", "oświetlenie", "dekoracje", "inne"];
    }
    else if (category === "łazienka") {
        return ["toaleta", "umywalka", "prysznic_/_wanna", "pralka", "rury", "inne"];
    }
    else if (category === "kuchnia") {
        return ["lodówka", "kuchenka", "zmywarka", "mikrofalówka", "zlew", "inne"];
    }
    else if (category === "remont") {
        return ["malowanie", "tapetowanie", "kafelkowanie", "montaż", "wykończenie", "inne"];
    }
    else {
        return ["prąd", "woda", "gaz", "temperatura", "internet", "inne"];
    }
}

const validateTitle = (value) => {
    if (value.length <= 5) {
        return false;
    }
    else {
        return true;
    }
}