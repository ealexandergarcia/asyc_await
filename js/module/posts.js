import { getUser } from "./users.js";
export const getAllPosts = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    return data;
};

const validateAddAlbum = async ({ userId, title, body }) => {
    if (typeof userId != "number" || userId === undefined) return { status: 406, message: ` The data ${userId} is not arriving or does not comply with the requiered format` }
    if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
    if (typeof body !== "string" || body === undefined) return { status: 406, message: ` The data ${body} is not arriving or does not comply with the requiered format` }
    let user = await getUser({ userId })
    if (user.status == 204) return { status: 200, message: `Username does not exist` }
}

export const addPost = async (arg) => {
    let val = await validateAddAlbum(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("https://jsonplaceholder.typicode.com/albums", config);
    let data = await res.json();
    return data;
};