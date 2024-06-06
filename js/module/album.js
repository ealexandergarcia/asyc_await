import { getUser } from "./users.js";

export const getAllAlbums = async () => {
  let res = await fetch("http://172.16.101.146:5802/albums");
  let data = await res.json();
  return data;
};

const validateGetAlbums = async(albumId) =>{
  if (typeof albumId !== "string" || albumId === undefined) return { status: 406, message: ` The data albumId is not arriving or does not comply with the requiered format` }
}
export const getAlbum = async (arg) => {
  let val = await validateGetAlbums(arg);
  if (val) return val;
  let res = await fetch(`http://172.16.101.146:5802/albums/${arg}`);
  if(res.status === 404) return { status: 204, message: `Album does not exist` }
  let data = await res.json();
  return data;
};

const validateAddAlbum = async ({ userId, title }) =>{
  if (typeof userId != "string" || userId === undefined) return { status: 406, message: ` The data ${userId} is not arriving or does not comply with the requiered format` }
  if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
  let user = await getUser({userId})
  if(user.status == 204) return { status: 200, message: `Username does not exist` }
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

export const updateAlbum  = async(id,arg)=>{
  let val = await validateAddAlbum (arg);
  if (val) return val;
  let config = {  
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  };
  let res = await fetch(`http://172.16.101.146:5802/albums/${id}`, config);
  let data = await res.json();
  return data;
}

export const patchAlbum  = async(id,arg)=>{
  let config = {  
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  };
  let res = await fetch(`http://172.16.101.146:5802/albums/${id}`, config);
  let data = await res.json();
  return data;
}