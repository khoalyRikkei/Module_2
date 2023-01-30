import { FILL_FORM, TOGGLE_FORM, UPDATE_STUDENT } from "../constants";

export const act_toggleForm = (value) => {
    return { payload: value, type: TOGGLE_FORM };
};

export const act_fillForm = ({ student, actionType }) => {
    return { payload: { ...student, actionType: actionType }, type: FILL_FORM };
};

export const act_updateForm = ({ students, actionType }) => {
    return { payload: students, type: actionType };
};
