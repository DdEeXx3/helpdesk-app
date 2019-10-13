const tips = {
    tips: [], 
    categories: ["elektronika", "wyposażenie", "łazienka", "kuchnia", "remont", "media"],
    currentCategory: "",
    currentSubcategory: "",
    currentSubcategories: [],
    filterSearchVisibility: {
        filterButton: "",
        filterBox: "none",
        searchButton: "",
        searchBox: "none"
    },
    subcategoryMessageStatus: "block",
    currentTips: [], 
    currentTip: [], 
    errorMessage: ""};

export const tipsReducer = (state = tips, action) => {
    switch(action.type) {
        case "FETCH_DATA_SUCCESS":
            return Object.assign({}, state, {tips: action.response, currentTips: action.response});
        case "FETCH_DATA_ERROR":
            return Object.assign({}, state, {errorMessage: action.error});
        case "GET_CURRENT_TIP":
            return Object.assign({}, state, {currentTip: action.currentTip});
        case "HANDLE_CURRENT_CATEGORY":
            return Object.assign({}, state, {currentCategory: action.category, currentSubcategories: getSubcategory(action.category), subcategoryMessageStatus: "none"});
        case "HANDLE_CURRENT_SUBCATEGORY":
            return Object.assign({}, state, {currentSubcategory: action.subcategory});
        case "SHOW_FILTER_BOX":
            return Object.assign({}, state, {filterSearchVisibility: checkFilter(state.filterSearchVisibility)});
        case "SHOW_SEARCH_BOX":
                return Object.assign({}, state, {filterSearchVisibility: checkSearch(state.filterSearchVisibility)});
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

const checkFilter = (state) => {
    state.searchButton = "";
    state.searchBox = "none";
    if (state.filterButton === "") {
        state.filterButton = "filter-search-active";
    }
    else {
        state.filterButton = "";
    };
    if (state.filterBox === "none") {
        state.filterBox = "";
    }
    else {
        state.filterBox = "none";
    };
    return state;

}

const checkSearch = (state) => {
    state.filterButton = "";
    state.filterBox = "none";
    if (state.searchButton === "") {
        state.searchButton = "filter-search-active";
    }
    else {
        state.searchButton = "";
    };
    if (state.searchBox === "none") {
        state.searchBox = "";
    }
    else {
        state.searchBox = "none";
    };
    return state;
}