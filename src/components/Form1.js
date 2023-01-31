import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_toggleForm, act_updateForm } from "../store/action";
import * as actionTypes from "../constants";
import moment from "moment/moment";

export default function FormStudent() {
    const dispatch = useDispatch();
    const studentForm = useSelector((state) => state.fillForm);
    const listStudent = useSelector((state) => state.getData);
    const [student, setStudent] = useState(studentForm);
    useEffect(() => {
        setStudent(studentForm);
    }, [studentForm]);

    const handleOnChangeForm = (event) => {
        const keyName = event.target.name;
        const value = event.target.value;
        setStudent({ ...student, [keyName]: value });
    };

    const handleSubmitForm = () => {
        const dulicateCode = listStudent.find(
            (item) => item.code === student.code
        );
        const newUpdate = listStudent?.map((item) => {
            if (item.code === student.code) {
                const { actionType, ...other } = student;
                return other;
            }
            return item;
        });

        // Validate create student code dulicate
        if (student?.actionType === "create" && dulicateCode) {
            return alert(
                "Student code already exists, please create a new student code"
            );
        }
        dispatch(act_toggleForm(false));
        if (student?.actionType === "create") {
            const { actionType, ...other } = student;
            const newData = [...listStudent, { ...other }];
            return dispatch(
                act_updateForm({
                    students: newData,
                    actionType: actionTypes.CREATE_STUDENT,
                })
            );
        }
        dispatch(
            act_updateForm({
                students: newUpdate,
                actionType: actionTypes.UPDATE_STUDENT,
            })
        );
    };
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Mã sinh viên
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={student.code}
                                    readOnly={student.actionType !== "create"}
                                    name="code"
                                    onChange={handleOnChangeForm}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Tên sinh viên
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={student.name}
                                    readOnly={student.actionType === "view"}
                                    name="name"
                                    onChange={handleOnChangeForm}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Tuổi
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    readOnly
                                    value={
                                        student.doB
                                            ? new Date().getFullYear() -
                                              new Date(
                                                  student.doB
                                              ).getFullYear()
                                            : ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Giới tính
                            </label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    value={student.gender ? student.gender : 1}
                                    readOnly={student.actionType === "view"}
                                    name="gender"
                                    onChange={handleOnChangeForm}
                                >
                                    <option value={1}>Nam</option>
                                    <option value={0}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Ngày sinh
                            </label>
                            <div className="col-sm-9">
                                <input
                                    className="form-control"
                                    placeholder="dd/mm/yyyy"
                                    value={moment(student.doB).format(
                                        "YYYY-MM-DD"
                                    )}
                                    readOnly={student.actionType === "view"}
                                    name="doB"
                                    onChange={handleOnChangeForm}
                                    type="date"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Nơi sinh
                            </label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    value={student.poB ? student.poB : "01"}
                                    readOnly={student.actionType === "view"}
                                    name="poB"
                                    onChange={handleOnChangeForm}
                                >
                                    <option value={"01"}>Hà Nội</option>
                                    <option value={"02"}>
                                        TP. Hồ Chí Minh
                                    </option>
                                    <option value={"04"}>Đà Nẵng</option>
                                    <option value={"17"}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                                Địa chỉ
                            </label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control"
                                    value={student.address}
                                    readOnly={student.actionType === "view"}
                                    rows={5}
                                    name="address"
                                    onChange={handleOnChangeForm}
                                ></textarea>
                            </div>
                        </div>
                        {student.actionType !== "view" && (
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                                onClick={handleSubmitForm}
                            >
                                Submit
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
