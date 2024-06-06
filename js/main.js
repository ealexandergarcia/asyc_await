import { getAllAlbums,addAlbum, getAlbum, updateAlbum, patchAlbum} from "./module/album.js";
import { getUser, addUser, updateUser, patchUser, getAllUsers, deleteUser} from "./module/users.js";
import { getAllPosts, addPost, getPost} from "./module/posts.js";
import { getAllComments, addComments} from "./module/comments.js";
import { getAllTodos, addTodos} from "./module/todos.js";

/**
 * * Metodos para User
 */
// const userData = {
//     userId:"4ecb",
//     name: "John Doe",
//     username: "prueba",
//     email: "johndoe@example.com",
//     address: {
//       street: "123 Main St",
//       suite: "Apt 101",
//       city: "Anytown",
//       zipcode: "12345",
//       geo: {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     phone: "555-555-5555",
//     website: "johndoe.com",
//     company: {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//   };

// const userData = { username: "prueba" };

// console.log(await getAllUsers());
// console.log(await getUser({userId: "a73e"}));
// console.log(await addUser(userData));
// console.log(await updateUser(userData));
// console.log(await deleteUser("775d"));
// console.log(await patchUser("4ecb",userData))

/**
 * * Metodos para Album
 */
const albumdata = {userId:"1", title:"Ya no lo filtren"}
// console.table(await getAllAlbums());
// console.table(await getAlbum("c963"));
// console.table(await addAlbum({userId:"1", title:"Prueba filtren a Carlos"}));  
// console.table(await updateAlbum("c963", albumdata))
// console.table(await patchAlbum("c963",albumdata))
/**
 * * Metodos para Comments
 */

// console.table(await addComments({postId:100, name:"Prueba",email:"prueba@gmail.com", body:"Prueba de contenido"}))

/**
 * * Metodos para Post
 */

// console.table(await getPost({postId:1}));
// console.table(await addPost({userId:10, title:"Prueba", body:"Prueba de contenido"}))
// console.table(await getAllPosts())


/**
 * * Metodos para Todos
 */
// console.table(await addTodos({userId:10,title:"prueba",completed: true}));


