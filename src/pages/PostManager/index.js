import axios from "axios";

import { useEffect, useState } from "react";
import { Modal, Toast, Button, Form } from "react-bootstrap";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { baseUrl } from "../../util/baseUrl";

export default function PostManager() {
    const navigate = useNavigate();
    const [listPost, setListPost] = useState("");
    const [modalToggle, setModalToggle] = useState(false);
    const [toast, setToast] = useState({
        status: false,
        msg: "",
        timeOut: 0,
        title: "",
        bg: "",
    });
    const [postForm, setPostForm] = useState("");
    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        axios
            .get(baseUrl)
            .then((res) => {
                setListPost(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleEditPost = (post) => {
        setModalToggle(true);
        setPostForm(post);
    };

    // Action update
    const handleUpdate = (postForm) => {
        if (postForm.id) {
            axios
                .put(baseUrl + "/" + postForm.id, postForm)
                .then((res) => {
                    setModalToggle(false);
                    getPost();
                    setToast({
                        status: true,
                        msg: "Update successfully",
                        timeOut: 3000,
                        title: "UPDATE",
                        bg: "success",
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            axios
                .post(baseUrl, postForm)
                .then((res) => {
                    setModalToggle(false);
                    getPost();
                    setToast({
                        status: true,
                        msg: "Create successfully",
                        timeOut: 3000,
                        title: "CREATE",
                        bg: "success",
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    // Action delete
    const handleDeletePost = (id) => {
        axios
            .delete(baseUrl + "/" + id)
            .then((res) => {
                getPost();
                setToast({
                    status: true,
                    msg: "Delete successfully",
                    timeOut: 3000,
                    title: "DELETE",
                    bg: "success",
                });
            })
            .catch((err) => {
                console.error("Error delete", err);
            });
    };
    return (
        <>
            <Control onEditPost={handleEditPost} />
            <ToastContainer position="top-end" containerPosition="fixed">
                <Toast
                    show={toast.status}
                    delay={toast.timeOut}
                    autohide
                    onClose={() => setToast({ ...toast, status: false })}
                    bg={toast.bg}
                >
                    <Toast.Header>
                        <strong className="me-auto">{toast.title}</strong>
                    </Toast.Header>
                    <Toast.Body>{toast.msg}</Toast.Body>
                </Toast>
            </ToastContainer>
            <ModalCreateEditPost
                show={modalToggle}
                onHide={() => setModalToggle(false)}
                post={postForm}
                onUpdate={handleUpdate}
            />

            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPost &&
                            listPost.map((post, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{post.author}</td>
                                    <td style={{ whiteSpace: "normal" }}>
                                        {post.title}
                                    </td>

                                    <td>
                                        <Link
                                            className="btn btn-primary me-1"
                                            to={post.id}
                                        >
                                            View Detail
                                        </Link>

                                        <button
                                            className="btn btn-primary "
                                            onClick={() => handleEditPost(post)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-warning ms-1"
                                            onClick={() =>
                                                handleDeletePost(post.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <Outlet />
            </div>
        </>
    );
}

function Control({ onEditPost }) {
    return (
        <>
            <button
                className="btn-sm btn-primary m-1"
                onClick={() =>
                    onEditPost({ title: "", content: "", author: "" })
                }
            >
                Create Post
            </button>
            <input type="text" placeholder="Search post by name" />
        </>
    );
}

function ModalCreateEditPost({ show, onHide, post, onUpdate }) {
    const [postForm, setPostForm] = useState("");

    useEffect(() => {
        setPostForm(post);
    }, [post]);

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={show}
            onHide={onHide}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {postForm.id ? "Edit Post" : "Create Post"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label column="sm">Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email"
                            column="sm"
                            value={postForm?.author}
                            name="author"
                            onChange={(e) =>
                                setPostForm({
                                    ...postForm,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            placeholder="Fill title"
                            value={postForm?.title}
                            onChange={(e) =>
                                setPostForm({
                                    ...postForm,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            name="content"
                            style={{ height: "auto" }}
                            as="textarea"
                            rows={5}
                            value={postForm?.content}
                            onChange={(e) =>
                                setPostForm({
                                    ...postForm,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onUpdate(postForm)}>
                    {postForm.id ? "Create post" : "Update post"}
                </Button>
                <Button className="btn btn-danger" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
