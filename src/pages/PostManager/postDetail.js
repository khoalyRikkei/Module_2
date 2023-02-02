import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../util/baseUrl";

export default function PostDeTail() {
    const param = useParams();

    const [post, setPost] = useState("");

    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        axios
            .get(baseUrl)
            .then((res) => {
                setPost(res.data.find((post) => post.id == param.id));
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return <h1>Hello {post?.author} </h1>;
}
