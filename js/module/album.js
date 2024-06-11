import { getUser } from "./users.js";

export const getAllAlbums = async () => {
  let res = await fetch("http://172.16.101.146:5802/albums");
  let data = await res.json();
  return data;
};

// const validateGetAlbums = async ({albumId}) => {
//   if (typeof albumId !== "string" || albumId === undefined) return { status: 406, message: ` The data albumId is not arriving or does not comply with the requiered format` }
// }
export const getAlbum = async (id) => {
  // let val = await validateGetAlbums(arg);
  // if (val) return val;
  let res = await fetch(`http://172.16.101.146:5802/albums/${id}`);
  if (res.status === 404) return { status: 204, message: `Album does not exist` }
  let data = await res.json();
  return data;
};

const validateAddAlbum = async ({ userId, title }) => {
  if (typeof userId != "string" || userId === undefined) return { status: 406, message: ` The data ${userId} is not arriving or does not comply with the requiered format` }
  if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
  let user = await getUser({ userId })
  if (user.status == 204) return { status: 200, message: `Username does not exist` }
}

export const addAlbum = async (arg) => {
  let val = await validateAddAlbum(arg);
  if (val) return val;
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  };
  let res = await fetch("http://172.16.101.146:5802/albums", config);
  let data = await res.json();
  return data;
};

const validateUpdateAlbum = async ({ id, userId, title }) => {
  let album = await getAlbum({ id });
  if (album.status == 204) return album;
  title = (title && typeof title =="string") ? title : album.title;
  
  let user = await getUser({ userId })
  if (user.status == 204) return { status: 200, message: `Username does not exist` }
  
  album = {...album, userId, title};
  return album;
}

export const updateAlbum = async (arg) => {
  let val = await validateUpdateAlbum(arg);
  if (val.status) return val;
  let { id } = val;
  let config = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(val)
  };
  let res = await fetch(`http://172.16.101.146:5802/albums/${id}`, config);
  let data = await res.json();
  return data;
}

const validatepatchAlbum = async ({ userId, title }) => {
  let errors = {};

  if (userId!== undefined) {
    if (typeof userId!== "string") {
      errors.userId = `The data userId is not arriving or does not comply with the required format`;
    }
  }

  if (title!== undefined) {
    if (typeof title!== "string") {
      errors.title = `The data title is not arriving or does not comply with the required format`;
    }
  }

  if (Object.keys(errors).length > 0) {
    return { status: 406, message: "Error en los datos", errors };
  }

  let user = await getUser({ userId })
  if (user.status == 204) {
    return { status: 200, message: `Username does not exist` }
  }
}

export const patchAlbum = async (arg) => {
  let val = await validatepatchAlbum(arg);
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
  let res = await fetch(`http://172.16.101.146:5802/albums/${id}`, config);
  let data = await res.json();
  return data;
}

export const deleteAlbum = async (albumId) => {
  let config = {
    method: "DELETE"
  };
  let res = await fetch(`http://172.16.101.146:5802/albums/${albumId}`, config);
  if (res.status === 404) return { status: 204, message: "the album id does not exist or has an unaccepted format" }
  let data = await res.json();
  data.status = 202;
  data.message = `The album ${albumId} was deleted from the database`
  return data;
}