import { getAlbum } from "./album.js";

export const getAllPhotos = async () => {
    let res = await fetch("http://172.16.101.146:5803/photos");
    let data = await res.json();
    return data;
};

const validateGetPhotos = async (photosId) => {
    if (typeof photosId !== "string" || photosId === undefined) return { status: 406, message: ` The data photosId is not arriving or does not comply with the requiered format` }
}
export const getPhotos = async (arg) => {
    let val = await validateGetPhotos(arg);
    if (val) return val;
    let res = await fetch(`http://172.16.101.146:5803/photos/${arg}`);
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
    let res = await fetch("http://172.16.101.146:5803/photos", config);
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
    let res = await fetch(`http://172.16.101.146:5803/photos/${id}`, config);
    let data = await res.json();
    return data;
}

const validateUpdatePhotos = async ({ idAlbum, title, url, thumbnailUrl }) => {
    let errors = {};

    if (idAlbum !== undefined) {
        if (typeof idAlbum !== "string") {
            errors.idAlbum = `The data idAlbum is not arriving or does not comply with the required format`;
        }
    }

    if (title !== undefined) {
        if (typeof title !== "string") {
            errors.title = `The data title is not arriving or does not comply with the required format`;
        }
    }

    if (url !== undefined) {
        if (typeof url !== "string") {
            errors.url = `The data url is not arriving or does not comply with the required format`;
        }
    }

    if (thumbnailUrl !== undefined) {
        if (typeof thumbnailUrl !== "string") {
            errors.thumbnailUrl = `The data thumbnailUrl is not arriving or does not comply with the required format`;
        }
    }

    if (idAlbum !== undefined) {
        let album = await getAlbum( idAlbum )
        console.log('a');
        
        if (album.status == 204) {
            errors.thumbnailUrl = `Album does not exist`;
        }
    }
    if (Object.keys(errors).length > 0) {
        return { status: 406, message: "Error en los datos", errors };
    }

}

export const patchPhotos = async (arg) => {
    let val = await validateUpdatePhotos(arg);
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
    let res = await fetch(`http://172.16.101.146:5803/photos/${id}`, config);
    let data = await res.json();
    return data;
}

export const deletePhotos = async (photosId) => {
    let config = {
        method: "DELETE"
    };
    let res = await fetch(`http://172.16.101.146:5803/photos/${photosId}`, config);
    if (res.status === 404) return { status: 204, message: "the Photos id does not exist or has an unaccepted format" }
    let data = await res.json();
    data.status = 202;
    data.message = `The Photos ${photosId} was deleted from the database`
    return data;
}