import { getAllAlbums,addAlbum } from "./module/album.js";
import { getUser } from "./module/users.js";
import { getAllPosts, addPost, getPost} from "./module/posts.js";
import { getAllComments, addComments} from "./module/comments.js";


console.table(await addComments({postId:100, name:"Prueba",email:"prueba@gmail.com", body:"Prueba de contenido"}))
// console.table(await getPost({postId:1}));
// console.table(await addPost({userId:10, title:"Prueba", body:"Prueba de contenido"}))
// console.table(await getAllPosts())
// console.log(await getUser({userId: 1}));
// console.table(await addAlbum({userId:1, title:"Prueba"}));

