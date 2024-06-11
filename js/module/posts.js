import { getUser } from "./users.js";
export const getAllPosts = async () => {
    let res = await fetch("http://172.16.101.146:5800/posts");
    let data = await res.json();
    return data;
};


const validateAddPost = async ({ userId, title, body }) => {
    if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
    if (typeof body !== "string" || body === undefined) return { status: 406, message: ` The data ${body} is not arriving or does not comply with the requiered format` }
    let user = await getUser({ userId })
    if (user.status == 204) return { status: 200, message: `Username does not exist` }
}

const validateGetPost = async ({ postId }) => {
    if (typeof postId !== "string" || postId === undefined) return { status: 406, message: ` The data ${postId} is not arriving or does not comply with the requiered format` }
}

export const getPost = async (arg) => {
    let val = await validateGetPost(arg);
    if (val) return val;
    let res = await fetch(`http://172.16.101.146:5800/posts/${arg.postId}`);
    if (res.status === 404) return { status: 204, message: `Username does not exist` }
    let data = await res.json();
    return data;
};
export const addPost = async (arg) => {
    let val = await validateAddPost(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("http://172.16.101.146:5800/posts", config);
    let data = await res.json();
    return data;
};

export const updatePost = async (id, arg) => {
    let val = await validateAddPost(arg);
    if (val) return val;
    let config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5800/posts/${id}`, config);
    let data = await res.json();
    return data;
}
const validateUpdatePost = async ({ title, body, userId }) => {
    let errors = {};

    if (title !== undefined) {
        if (typeof title !== "string") {
            errors.title = `The data title is not arriving or does not comply with the required format`;
        }
    }

    if (body !== undefined) {
        if (typeof body !== "string") {
            errors.body = `The data body is not arriving or does not comply with the required format`;
        }
    }

    if (userId !== undefined) {
        let user = await getUser( userId )
        if (user.status == 204) {
            errors.userId = `Username does not exist`;
        }
    }

    if (Object.keys(errors).length > 0) {
        return { status: 406, message: "Error en los datos", errors };
    }

}

export const patchPost = async (arg) => {
    let val = await validateUpdatePost(arg);
    if (val) {
        if (val.status === 200) {
            return val;
        } else {
            return val;
        }
    }
    let { id } = arg;
    let config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5800/posts/${id}`, config);
    let data = await res.json();
    return data;
}

export const deletePost = async (postId) => {
    let config = {
        method: "DELETE"
    };
    let res = await fetch(`http://172.16.101.146:5800/posts/${postId}`, config);
    if (res.status === 404) return { status: 204, message: "the Post id does not exist or has an unaccepted format" }
    let data = await res.json();
    data.status = 202;
    data.message = `The Post ${postId} was deleted from the database`
    return data;
}