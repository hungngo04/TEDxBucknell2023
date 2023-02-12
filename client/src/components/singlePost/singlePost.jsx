import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
// import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { use } from "../../../../api/nodes/auth";
import "./singlePost.css";


export default function singlePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect (() => {
        const getPost = async() => {
            const res = await axios.get("./post" + path);
            setPost(res.data);
            setTitle(res.data);
            setDesc(res.data);
        };
        getPost();
    }, [path] );

    const handleDelete = async() => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.name },
            });
            window.location.replace("/");
        }
        catch (err) {}
    };
    
    const handleUpdate = async() => {
        try {
            await axios.update(`/posts/${post._id}`, {
                data: { username: user.name },
                title,
                desc,
            });
            setUpdateMode(false); //?
        }
        catch (err) {}
    }

    // TODO return: singple Post with appropriate user, title, desc, 
}

