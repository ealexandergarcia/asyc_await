import { getPost } from "./posts.js";
export const getAllComments= async () => {
    let res = await fetch("http://172.16.101.146:5801/comments");
    let data = await res.json();
    return data;
};

const validateAddComments = async ({ postId, name,email, body }) => {
    if (typeof name !== "string" || name === undefined) return { status: 406, message: ` The data ${name} is not arriving or does not comply with the requiered format` }
    if (typeof email !== "string" || email === undefined) return { status: 406, message: ` The data ${email} is not arriving or does not comply with the requiered format` }
    if (typeof body !== "string" || body === undefined) return { status: 406, message: ` The data ${body} is not arriving or does not comply with the requiered format` }
    let user = await getPost({ postId })
    if (user.status == 204) return { status: 200, message: `Post does not exist` }
}

export const addComments = async (arg) => {
    let val = await validateAddComments(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("http://172.16.101.146:5801/comments", config);
    let data = await res.json();
    return data;
};