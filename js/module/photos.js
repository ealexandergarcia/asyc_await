import { getAlbum } from "./album.js";

export const getAllPhotos = async () => {
    let res = await fetch("https://eeb0d5d633a3ac44a1c6ad64f07d43a4.serveo.net/photos");
    let data = await res.json();
    return data;
};

const validateGetPhotos = async (photosId) => {
    if (typeof photosId !== "string" || photosId === undefined) return { status: 406, message: ` The data photosId is not arriving or does not comply with the requiered format` }
}
export const getPhotos = async (arg) => {
    let val = await validateGetPhotos(arg);
    if (val) return val;
    let res = await fetch(`https://eeb0d5d633a3ac44a1c6ad64f07d43a4.serveo.net/photos/${arg}`);
    if (res.status === 404) return { status: 204, message: `Photo does not exist` }
    let data = await res.json();
    return data;
};

const validateAddPhotos = async ({ albumId, title, url, thumbnailUrl }) => {
    if (typeof albumId != "string" || albumId === undefined) return { status: 406, message: ` The data albumId is not arriving or does not comply with the requiered format` }
    if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data title is not arriving or does not comply with the requiered format` }
    if (typeof url !== "string" || url === undefined) return { status: 406, message: ` The data url is not arriving or does not comply with the requiered format` }
    if (typeof thumbnailUrl !== "string" || thumbnailUrl === undefined) return { status: 406, message: ` The data thumbnailUrl is not arriving or does not comply with the requiered format` }
    let user = await getAlbum({ albumId })
    if (user.status == 204) return { status: 200, message: `Album does not exist` }
}

export const addPhotos = async (arg) => {
    let val = await validateAddPhotos(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("https://eeb0d5d633a3ac44a1c6ad64f07d43a4.serveo.net/photos", config);
    let data = await res.json();
    return data;
};

export const updatePhotos = async (id, arg) => {
    let val = await validateAddPhotos(arg);
    if (val) return val;
    let config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`https://eeb0d5d633a3ac44a1c6ad64f07d43a4.serveo.net/photos/${id}`, config);
    let data = await res.json();
    return data;
}

export const patchPhotos = async (id, arg) => {
    let config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`https://eeb0d5d633a3ac44a1c6ad64f07d43a4.serveo.net/photos/${id}`, config);
    let data = await res.json();
    return data;
}

