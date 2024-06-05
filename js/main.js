import { getAllAlbums,addAlbum } from "./module/album.js";
import { getUser } from "./module/users.js";
import { getAllPosts, addPost} from "./module/posts.js";

console.table(await addPost({userId:10, title:"Prueba", body:"Prueba de contenido"}))
// console.table(await getAllPosts())
// console.log(await getUser({userId: 1}));
// console.table(await addAlbum({userId:1, title:"Prueba"}));

