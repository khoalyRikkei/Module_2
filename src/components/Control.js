import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { CREATE_STUDENT } from "../constants";
import { act_fillForm, act_toggleForm } from "../store/action";

function Control() {
    const dispatch = useDispatch();
    const onToggleForm = () => {
        dispatch(act_toggleForm(true));
        dispatch(
            act_fillForm({
                student: {
                    code: "",
                    name: "",
                    gender: "",
                    doB: "",
                    poB: "",
                    address: "",
                },
                actionType: "create",
            })
        );
    };
    return (
        <div className="card-header">
            <div className="row">
                <div className="col-3">
                    <button
                        type="button"
                        className="btn btn-primary btn-icon-text"
                        onClick={onToggleForm}
                    >
                        Thêm mới sinh viên
                    </button>
                </div>
                <div className="col-6">
                    <form className="search-form" action="#">
                        <i className="icon-search"></i>
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search Here"
                            title="Search here"
                            defaultValue={""}
                        />
                        <button className="btn btn-primary btn-icon-text">
                            Tìm kiếm
                        </button>
                    </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <select className="form-control">
                        <option value="">Sắp xếp</option>
                        <option value="">ABC def</option>
                        <option value="">ABC def</option>
                        <option value="">ABC def</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
export default Control;
