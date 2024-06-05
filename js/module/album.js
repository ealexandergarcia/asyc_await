export const getAllAlbums = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/albums");
  let data = await res.json();
  return data;
};

const validateAddAlbum = ({ userId, title }) =>{
  if (typeof userId != "number" || userId === undefined) return { status: 406, message: ` The data ${userId} is not arriving or does not comply with the requiered format` }
  if (typeof title !== "string" || title === undefined) return { status: 406, message: ` The data ${title} is not arriving or does not comply with the requiered format` }
}

export const addAlbum = async (arg) => {
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
