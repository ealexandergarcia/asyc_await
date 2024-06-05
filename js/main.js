import { getAllAlbums,addAlbum } from "./module/album.js";
import { getUser } from "./module/users.js";

console.log(await getUser({userId: 1}));
console.table(await addAlbum({userId:1, title:"Prueba"}));

