import { ListStudent, newStudent } from "../util/db";
import * as actionTypes from "../constants";
import { combineReducers } from "redux";
const initalState = ListStudent;
const studentForm = {
    code: "",
    name: "",
    gender: "",
    doB: "",
    poB: "",
    address: "",
};

// Get all students
export const getData = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_STUDENT:
        case actionTypes.UPDATE_STUDENT:
        case actionTypes.DELETE_STUDENT:
            return (state = action.payload);

        default:
            return state;
    }
};

// // Action data
// export const updateData = (state = initalState, action) => {
//     switch (action.type) {
//         case actionTypes.CREATE_STUDENT:
//             state = [...state, new newStudent(action.payload)];
//             return state;
//         case actionTypes.UPDATE_STUDENT:
//             return state;
//         case actionTypes.DELETE_STUDENT:
//             return state;
//         default:
//             return state;
//     }
// };

// toggle form

export const toggleForm = (state = false, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FORM:
            return (state = action.payload);
        default:
            return state;
    }
};

// Fill form

export const fillForm = (state = studentForm, action) => {
    switch (action.type) {
        case actionTypes.FILL_FORM:
            return (state = action.payload);
        default:
            return state;
    }
};

export const reducer = combineReducers({
    getData,
    toggleForm,
    fillForm,
});
