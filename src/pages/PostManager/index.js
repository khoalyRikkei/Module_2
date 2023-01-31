import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export default function PostManager() {
    const [listPost, setListPost] = useState("");
    useEffect(() => {
        console.log(111111111);
        axios
            .get(baseUrl)
            .then((res) => {
                setListPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Control />
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <th>STT</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {listPost &&
                            listPost.map((post, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

function Control() {
    return (
        <>
            <button>Create Post</button>
            <input type="text" placeholder="Search post by name" />
        </>
    );
}
