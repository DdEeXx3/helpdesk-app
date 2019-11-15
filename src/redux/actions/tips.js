import Swal from 'sweetalert2';

//CONNECT WITH DATABASE:
export const fetchData = (search = '') => {
    return dispatch => {
        fetch(`http://localhost:3004/porady?q=${search}`)
        .then(resp => {
            resp.json().then((json) => {
                if (json.message) {
                    dispatch(errorFetchData(json.message));
                }
                else if (json.length == 0) {
                    dispatch(errorFetchData("Nic nie znaleziono :("));
                }
                else {
                    dispatch(successFetchData(json));
                }
                return json;
            })
        })
    }
}

export const getCurrentTip = (currentTip) => {
    return {
        type: 'GET_CURRENT_TIP',
        currentTip
    }
}

const successFetchData = (response) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        response
    }
}

const errorFetchData = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        error
    }
}

const handleSearchAction = (e) => {
    return {
        type: 'HANDLE_SEARCH',
        search: e.target.value
    }
}

//GET VALUES FROM SEARCH/FILTER BOX:
export const handleSearch = (e) => {
    return (dispatch, getState) => {
        dispatch(handleSearchAction(e));
        dispatch(filter(e.target.value, getState().tips.currentCategory, getState().tips.currentSubcategory));
    }
}

const handleCurrentCategoryAction = (category) => {
    return {
        type: 'HANDLE_CURRENT_CATEGORY',
        category
    }
}

export const handleCurrentCategory = (category) => {
    return (dispatch, getState) => {
        if (getState().tips.currentSubcategory) {
            dispatch(clearSubcategoryState())
        };
        dispatch(handleCurrentCategoryAction(category));
        dispatch(filter(getState().tips.searchValue, category, getState().tips.currentSubcategory));
    }
}

export const clearSubcategoryState = () => {
    return {
        type: "CLEAR_SUBCATEGORY_STATE"
    }
}

const handleCurrentSubcategoryAction = (subcategory) => {
    return {
        type: 'HANDLE_CURRENT_SUBCATEGORY',
        subcategory
    }
}

export const handleCurrentSubcategory = (subcategory) => {
    return (dispatch, getState) => {
        if (subcategory === "prysznic_/_wanna") {
            subcategory = "prysznic_wanna";
        }
        dispatch(handleCurrentSubcategoryAction(subcategory));
        dispatch(filter(getState().tips.searchValue, getState().tips.currentCategory, subcategory));
    }
}

export const showFilterBox = () => {
    return {
        type: "SHOW_FILTER_BOX"
    }
}
export const showSearchBox = () => {
    return {
        type: "SHOW_SEARCH_BOX"
    }
}

const showFilterResultAction = (result) => {
    return {
        type: "SHOW_FILTER_RESULT",
        result
    }
}

export const showFilterResult = (result) => {
    return (dispatch, getState) => {
        dispatch(showFilterResultAction(result));
        dispatch(handleCurrentSortOption(getState().tips.currentSortOption));
    }
}

export const clearCategoryFilter = () => {
    return {
        type: "CLEAR_CATEGORY_FILTER"
    }
}


//FILTER RESULTS:
export const filter = (search = '', category = '', subcategory = '') => {
    return (dispatch) => {
        dispatch(showLoading());
        setTimeout(() => dispatch(filterAction(search, category, subcategory)), 2000);
    }
}

const filterAction = (search = '', category = '', subcategory = '') => {
    return (dispatch) => {
        let param = '?q=';

        if (search === '') {
            param = param;
        }
        else {
            param = `${param}${search}`;
        }

        if (category === '') {
            param = `${param}&`;
        }
        else {
            param = `${param}&kategoria=${category}`;
        }

        if (subcategory === '') {
            param = `${param}&`;
        }
        else {
            param = `${param}&podkategoria=${subcategory}`;
        }

        const query = `http://localhost:3004/porady${param}`;
        console.log(query);
        fetch(query)
        .then(resp => {
            resp.json().then((json) => {
                if (json.message) {
                    dispatch(errorFetchData(json.message));
                }
                else if (json.length == 0) {
                    dispatch(showFilterResult(json));
                    dispatch(errorFetchData(""));
                }
                else {
                    dispatch(showFilterResult(json));
                }
                return json;
            })
        })
    }
}

const showLoading = () => {
    return {
        type: "SHOW_LOADING"
    }
}

//SORT RESULTS:

const handleCurrentSortOptionAction = (option) => {
    return {
        type: 'HANDLE_CURRENT_SORT_OPTION',
        option
    }
}

export const handleCurrentSortOption = (option) => {
    return (dispatch, getState) => {
        dispatch(handleCurrentSortOptionAction(option));
        var tips = getState().tips.currentTips;
        if (option === "Nazwa (od A do Z)") {
            dispatch(sortByNameIncreasing(tips));
        }
        else if (option === "Nazwa (od Z do A)") {
            dispatch(sortByNameDecreasing(tips));
        }
        else if (option === "Ocena (od najwyższej)") {
            dispatch(sortByRatingDecreasing(tips));
        }
        else if (option === "Ocena (od najniższej)") {
            dispatch(sortByRatingIncreasing(tips));
        }
    }
}

const sortAction = (tips) => {
    return {
        type: "SORT_ACTION",
        tips
    }
}

const sortByNameIncreasing = (tips) => {
    return dispatch => {
        var afterSort = [];
        afterSort = tips.sort((a, b) => a.tytuł > b.tytuł ? 1 : -1);
        dispatch(sortAction(afterSort));

    }
}

const sortByNameDecreasing = (tips) => {
    return dispatch => {
        var afterSort = [];
        afterSort = tips.sort((a, b) => a.tytuł < b.tytuł ? 1 : -1);
        dispatch(sortAction(afterSort));
    }
}

const sortByRatingIncreasing = (tips) => {
    return dispatch => {
        var afterSort = [];
        afterSort = tips.sort((a, b) => a.ocenyPozytywne / (a.ocenyPozytywne + a.ocenyNegatywne) > b.ocenyPozytywne / (b.ocenyPozytywne + b.ocenyNegatywne) ? 1 : -1);
        dispatch(sortAction(afterSort));
    }
}

const sortByRatingDecreasing = (tips) => {
    return dispatch => {
        var afterSort = [];
        afterSort = tips.sort((a, b) => a.ocenyPozytywne / (a.ocenyPozytywne + a.ocenyNegatywne) < b.ocenyPozytywne / (b.ocenyPozytywne + b.ocenyNegatywne) ? 1 : -1);
        dispatch(sortAction(afterSort));
    }
}

const clearSortOptionsAction = () => {
    return {
        type: "CLEAR_SORT_OPTIONS"
    }
}

export const clearSortOptions = () => {
    return (dispatch, getState) => {
        dispatch(clearSortOptionsAction());
        dispatch(filter(getState().tips.searchValue, getState().tips.currentCategory, getState().tips.currentSubcategory));
    }
}

//RATE TIP:
export const rateUp = (ratesUp, id) => {
    return (dispatch) => {
        const rate = ratesUp + 1;
        fetch(`http://localhost:3004/porady/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ocenyPozytywne: rate
            })
        });
        dispatch(() => rateAlert());
    }
}

export const rateDown = (ratesDown, id) => {
    return (dispatch) => {
        const rate = ratesDown + 1;
        fetch(`http://localhost:3004/porady/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ocenyNegatywne: rate
            })
        });
        dispatch(() => rateAlert());
    }
}

const rateAlert = () => {
    Swal.fire({
        position: 'middle-center',
        type: 'success',
        title: 'Dziekujemy za ocenę!',
        showConfirmButton: false,
        timer: 2000
    });
    setTimeout(function () {
        window.history.back()
    }, 2000);
}