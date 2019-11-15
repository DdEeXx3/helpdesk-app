import Swal from 'sweetalert2';

const handleCurrentCategoryAction = (category) => {
    return {
        type: 'HANDLE_CURRENT_FORM_CATEGORY',
        category
    }
}

export const handleCurrentCategory = (category) => {
    return (dispatch, getState) => {
        if (getState().tipsForm.podkategoria) {
            dispatch(clearSubcategoryState())
        };
        dispatch(handleCurrentCategoryAction(category));
        dispatch(checkValidationStatus());
    }
}

export const clearSubcategoryState = () => {
    return {
        type: "CLEAR_FORM_SUBCATEGORY_STATE"
    }
}

const handleCurrentSubcategoryAction = (subcategory) => {
    return {
        type: 'HANDLE_CURRENT_FORM_SUBCATEGORY',
        subcategory
    }
}

export const handleCurrentSubcategory = (subcategory) => {
    return (dispatch) => {
        if (subcategory === "prysznic_/_wanna") {
            subcategory = "prysznic_wanna";
        }
        dispatch(handleCurrentSubcategoryAction(subcategory));
        dispatch(checkValidationStatus());
    }
}

const handleTitleAction = (e) => {
    return {
        type: "HANDLE_TITLE",
        title: e.target.value
    }
}

export const handleTitle = (e) => {
    return (dispatch) => {
        dispatch(handleTitleAction(e));
        dispatch(checkValidationStatus());
    }
}



const addStepAction = (steps, validation) => {
    return {
        type: "ADD_STEP",
        steps,
        validation
    }
}

export const addStep = () => {
    return (dispatch, getState) => {
        var steps = getState().tipsForm.kroki;
        var stepsValidation = getState().tipsForm.stepsValidation;
        steps.push({
            tytuł: '',
            imgUrl: '',
            tekst: [
                {paragraf: ''}
            ]
        });
        stepsValidation.push({
            tytuł: false,
            imgUrl: true,
            tekst: [
                {paragraf: false}
            ]

        })
        dispatch(addStepAction(steps, stepsValidation));
    }
}

const deleteStepAction = (steps, validation) => {
    return {
        type: "DELETE_STEP",
        steps,
        validation
    }
}

export const deleteStep = () => {
    return (dispatch, getState) => {
        var steps = getState().tipsForm.kroki;
        var stepsValidation = getState().tipsForm.stepsValidation;
        steps.pop();
        stepsValidation.pop();
        dispatch(deleteStepAction(steps, stepsValidation));
    }
}

const addParagraphAction = (steps, validation) => {
    return {
        type: "ADD_PARAGRAPH",
        steps,
        validation
    }
}

export const addParagraph = (index) => {
    return (dispatch, getState) => {
        var paragraphs = getState().tipsForm.kroki[index];
        var paragraphsValidation = getState().tipsForm.stepsValidation[index];
        paragraphs.tekst.push(
            {paragraf: ''}
        );
        paragraphsValidation.tekst.push(
            {paragraf: false}
        );
        var updatedState = getState().tipsForm.kroki;
        updatedState[index] = paragraphs;
        var updatedValidationState = getState().tipsForm.stepsValidation;
        updatedValidationState[index] = paragraphsValidation;
        dispatch(addParagraphAction(updatedState, updatedValidationState));
    }
}

const deleteParagraphAction = (steps, validation) => {
    return {
        type: "DELETE_PARAGRAPH",
        steps,
        validation
    }
}

export const deleteParagraph = (index) => {
    return (dispatch, getState) => {
        var paragraphs = getState().tipsForm.kroki[index];
        var paragraphsValidation = getState().tipsForm.stepsValidation[index];
        paragraphs.tekst.pop();
        paragraphsValidation.tekst.pop();
        var updatedState = getState().tipsForm.kroki;
        updatedState[index] = paragraphs;
        var updatedValidationState = getState().tipsForm.stepsValidation;
        updatedValidationState[index] = paragraphsValidation;
        dispatch(deleteParagraphAction(updatedState, updatedValidationState));
    }
}

const handleStepTitleAction = (steps, validation) => {
    return {
        type: "HANDLE_STEP_TITLE",
        steps,
        validation
    }
}

export const handleStepTitle = (e, index) => {
    return (dispatch, getState) => {
        var step = getState().tipsForm.kroki[index];
        step.tytuł = e.target.value;
        var updatedState = getState().tipsForm.kroki;
        updatedState[index] = step;

        //WALIDACJA
        var stepValidation = getState().tipsForm.stepsValidation[index];
        if (step.tytuł.length <= 5) {
            stepValidation.tytuł = false;
        }
        else {
            stepValidation.tytuł = true;
        }
        var updatedValidationState = getState().tipsForm.stepsValidation;
        updatedValidationState[index] = stepValidation;
        //

        dispatch(handleStepTitleAction(updatedState, updatedValidationState));
        dispatch(checkValidationStatus());
    }
}

const handleStepImageUrlAction = (steps, validation) => {
    return {
        type: "HANDLE_STEP_IMAGE_URL",
        steps,
        validation
    }
}

export const handleStepImageUrl = (e, index) => {
    return (dispatch, getState) => {
        var step = getState().tipsForm.kroki[index];
        step.imgUrl = e.target.value;
        var updatedState = getState().tipsForm.kroki;
        updatedState[index] = step;

        //WALIDACJA
        var stepValidation = getState().tipsForm.stepsValidation[index];
        if (((step.imgUrl.startsWith("http://")) || (step.imgUrl.startsWith("https://"))) && (step.imgUrl.length != 0)) {
            stepValidation.imgUrl = true;
        }
        else if (step.imgUrl.length == 0){
            stepValidation.imgUrl = true;
        }
        else {
            stepValidation.imgUrl = false;
        }
        var updatedValidationState = getState().tipsForm.stepsValidation;
        updatedValidationState[index] = stepValidation;
        //

        dispatch(handleStepImageUrlAction(updatedState, updatedValidationState));
        dispatch(checkValidationStatus());
    }
}

const handleParagraphAction = (steps, validation) => {
    return {
        type: "HANDLE_PARAGRAPH",
        steps,
        validation
    }
}

export const handleParagraph = (e, stepIndex, textIndex) => {
    return (dispatch, getState) => {
        var step = getState().tipsForm.kroki[stepIndex];
        var paragraph = step.tekst[textIndex];
        paragraph.paragraf = e.target.value;
        var updatedState = getState().tipsForm.kroki;
        updatedState[stepIndex] = step;

        //WALIDACJA
        var stepValidation = getState().tipsForm.stepsValidation[stepIndex];
        var paragraphValidation = stepValidation.tekst[textIndex];
        if (paragraph.paragraf.length <= 10) {
            paragraphValidation.paragraf = false;
        }
        else {
            paragraphValidation.paragraf = true;
        }
        var updatedValidationState = getState().tipsForm.stepsValidation;
        updatedValidationState[stepIndex] = stepValidation;
        //

        dispatch(handleParagraphAction(updatedState, updatedValidationState));
        dispatch(checkValidationStatus());
    }
}

export const addNewTip = (title, category, subcategory, steps) => {
    return () => {
        fetch("http://localhost:3004/porady", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tytuł: title,
                "kategoria": category,
                "podkategoria": subcategory,
                "ocenyPozytywne": 0,
                "ocenyNegatywne": 0,
                "kroki": steps
            })
        })
        Swal.fire({
            position: 'middle-center',
            type: 'success',
            title: 'Usterka została pomyślnie dodana!',
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(function () {
            window.history.back()
        }, 2000);
    }
}

const checkValidationStatusAction = (status) => {
    return {
        type: "CHECK_VALIDATION_STATUS",
        status
    }
}

const checkValidationStatus = () => {
    return (dispatch, getState) => {
        var validationStatus = true;
        if (!getState().tipsForm.titleValidation) {
            validationStatus = false;
        }
        if (!getState().tipsForm.subcategoryValidation) {
            validationStatus = false;
        }
        var steps = getState().tipsForm.stepsValidation;
        steps.map((step) => {
            if (!step.tytuł) {
                validationStatus = false;
            }
            if (!step.imgUrl) {
                validationStatus = false;
            }
            step.tekst.map(paragraf => {
                if(!paragraf.paragraf) {
                    validationStatus = false;
                }
            })
        })
        dispatch(checkValidationStatusAction(validationStatus));
    }
}