export const fetchData = () => {
    return dispatch => {
        fetch('http://localhost:3004/porady')
        .then(resp => {
            resp.json().then((json) => {
                if (json.message) {
                    dispatch(errorFetchData(json.message));
                }
                else if (json.length == 0) {
                    dispatch(errorFetchData("Nothing found :("));
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

export const handleCurrentCategory = (category) => {
    return {
        type: 'HANDLE_CURRENT_CATEGORY',
        category
    }
}

export const handleCurrentSubcategory = (subcategory) => {
    return {
        type: 'HANDLE_CURRENT_SUBCATEGORY',
        subcategory
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


