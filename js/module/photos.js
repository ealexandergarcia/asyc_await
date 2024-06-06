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