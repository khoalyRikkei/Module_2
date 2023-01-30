import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STUDENT } from "../constants";
import { act_fillForm, act_toggleForm } from "../store/action";
function ListStudent() {
    const dispatch = useDispatch();
    const listStudent = useSelector((state) => state.getData);
    const handleViewEdit = ({ student, actionType }) => {
        dispatch(act_toggleForm(true));
        dispatch(act_fillForm({ student, actionType }));
    };
    const handleDelete = (student) => {
        console.log(student);
    };
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listStudent &&
                            listStudent.map((student, index) => (
                                <tr key={student.code}>
                                    <td>{index + 1}</td>
                                    <td>{student.code}</td>
                                    <td>{student.name}</td>
                                    <td>
                                        {new Date().getFullYear() -
                                            new Date(student.doB).getFullYear()}
                                    </td>
                                    <td>
                                        {student.gender == 1 ? "Nam" : "Nữ"}
                                    </td>
                                    <td>
                                        <div className="template-demo">
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-icon-text"
                                                onClick={() =>
                                                    handleViewEdit({
                                                        student,
                                                        actionType: "view",
                                                    })
                                                }
                                            >
                                                Xem
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() =>
                                                    handleViewEdit({
                                                        student,
                                                        actionType: "edit",
                                                    })
                                                }
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-success btn-icon-text"
                                                onClick={() =>
                                                    handleDelete({
                                                        student,
                                                        actionType: "delete",
                                                    })
                                                }
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ListStudent;
