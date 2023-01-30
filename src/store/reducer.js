import { ListStudent, newStudent } from "../util/db";
import * as actionType from "../constants";
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
    console.log(111111111, state);
    return state;
};

// Action data
export const updateData = (state = initalState, action) => {
    switch (action.type) {
        case actionType.CREATE_STUDENT:
            state = [...state, new newStudent(action.payload)];
            return state;
        case actionType.UPDATE_STUDENT:
            console.log(2323232, action.payload, state);

            return state;
        case actionType.DELETE_STUDENT:
            return state;
        default:
            return state;
    }
};

// toggle form

export const toggleForm = (state = false, action) => {
    switch (action.type) {
        case actionType.TOGGLE_FORM:
            return (state = action.payload);
        default:
            return state;
    }
};

// Fill form

export const fillForm = (state = studentForm, action) => {
    switch (action.type) {
        case actionType.FILL_FORM:
            return (state = action.payload);
        default:
            return state;
    }
};

export const reducer = combineReducers({
    getData,
    updateData,
    toggleForm,
    fillForm,
});
