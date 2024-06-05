import { getUser } from "./users.js";
export const getAllTodos= async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    return data;
};

const validateAddTodos = async ({ userId, title, completed }) => {
    if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
    if (typeof completed !== "boolean" || completed === undefined) return { status: 406, message: ` The data ${completed} is not arriving or does not comply with the requiered format` }
    let user = await getUser({ userId })
    if (user.status == 204) return { status: 200, message: `User does not exist` }
}

export const addTodos = async (arg) => {
    let val = await validateAddTodos(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("https://jsonplaceholder.typicode.com/todos", config);
    let data = await res.json();
    return data;
};