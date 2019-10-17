const tips = {
    tips: [], 
    currentTips: [], 
    currentTip: [], 
    errorMessageClass: "error-message-hidden",
    categories: ["elektronika", "wyposażenie", "łazienka", "kuchnia", "remont", "media"],
    sortOptions: ["Nazwa (od A do Z)", "Nazwa (od Z do A)", "Ocena (od najwyższej)", "Ocena (od najniższej)"],
    searchValue: '',
    currentSubcategories: [],
    currentCategory: "",
    currentSubcategory: "",
    currentSortOption: '',
    filterSearchVisibility: {
        filterButton: "",
        filterBox: "none",
        searchButton: "",
        searchBox: "none"
    },
    subcategoryMessageStatus: "block",};

export const tipsReducer = (state = tips, action) => {
    switch(action.type) {
        case "FETCH_DATA_SUCCESS":
            return Object.assign({}, state, {tips: action.response, currentTips: action.response});
        case "FETCH_DATA_FAILURE":
            return Object.assign({}, state, {errorMessageClass: action.error});
        case "GET_CURRENT_TIP":
            return Object.assign({}, state, {currentTip: action.currentTip});
        case "HANDLE_SEARCH":
            return Object.assign({}, state, {searchValue: action.search});
        case "HANDLE_CURRENT_CATEGORY":
            return Object.assign({}, state, {currentCategory: action.category, currentSubcategories: getSubcategory(action.category), subcategoryMessageStatus: "none"});
        case "HANDLE_CURRENT_SUBCATEGORY":
            return Object.assign({}, state, {currentSubcategory: action.subcategory});
        case "HANDLE_CURRENT_SORT_OPTION":
            return Object.assign({}, state, {currentSortOption: action.option});
        case "SHOW_FILTER_BOX":
            return Object.assign({}, state, {filterSearchVisibility: checkFilter(state.filterSearchVisibility)});
        case "SHOW_SEARCH_BOX":
            return Object.assign({}, state, {filterSearchVisibility: checkSearch(state.filterSearchVisibility)});
        case "SHOW_FILTER_RESULT":
            return Object.assign({}, state, {currentTips: action.result, errorMessageClass: "error-message-hidden"});
        case "SORT_ACTION":
            return Object.assign({}, state, {currentTips: action.tips});
        case "CLEAR_SUBCATEGORY_STATE":
            return Object.assign({}, state, {currentSubcategory: ''});
        case "CLEAR_SORT_OPTIONS":
            return Object.assign({}, state, {currentSortOption: ''});
        case "CLEAR_CATEGORY_FILTER":
            return Object.assign({}, state, {currentSubcategories: [], subcategoryMessageStatus: "block"}); 
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