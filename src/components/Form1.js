import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_toggleForm, act_updateForm } from "../store/action";
import * as actionType from "../constants";

export default function FormStudent() {
    const dispatch = useDispatch();
    const studentForm = useSelector((state) => state.fillForm);
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
        const newData = studentForm.map((item) => {
            if (item.code === student.code) {
                return student;
            }
            return item;
        });
        dispatch(act_toggleForm(true));
        dispatch(
            act_updateForm({
                students: newData,
                actionType: actionType.UPDATE_STUDENT,
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
                                    readOnly={student.actionType === "view"}
                                    name="code"
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
                                    readOnly={student.actionType === "view"}
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
                                    value={student.gender}
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
                                    value={student.doB}
                                    readOnly={student.actionType === "view"}
                                    name="doB"
                                    onChange={handleOnChangeForm}
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
                                    value={student.poB}
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
