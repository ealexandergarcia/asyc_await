import { getAllAlbums, addAlbum, getAlbum, updateAlbum, patchAlbum, deleteAlbum } from "./module/album.js";
import { getUser, addUser, updateUser, patchUser, getAllUsers, deleteUser } from "./module/users.js";
import { getAllPosts, addPost, getPost } from "./module/posts.js";
import { getAllComments, addComments } from "./module/comments.js";
import { getAllTodos, addTodos } from "./module/todos.js";
import { getAllPhotos, getPhotos, addPhotos, updatePhotos, patchPhotos, deletePhotos } from "./module/photos.js";


// let menuAlbums = async ()=>{
//     let menu = prompt (`
//         Album Menu
//             1. SearchAll
//             2. Add
//             3. Delete
//     `,1);
//     menu = Number(menu);
//     if(menu == 1) {
//         return await getAllAlbums();
//     }
//     if(menu == 2 ) {
//         let userId = prompt("Enter the user id",10);
//         let title = prompt("Enter the album title","Gallery");
//         return await addAlbum({userId,title});
//     }
//     if(menu == 3) {
//         let id = prompt("Enter the album id you want to delete",10);
//         return await deleteAlbum(id);
//     }
// }

// let menuPost = async()=>{
//     let menu = prompt(`
//     Post Menu
//         1. SearchAll
//         2. Add
//         3. Delete
//     `,1);
//     menu = Number(menu);
//     if(menu == 1) {
//         return await getAllPosts();
//     }
//     if(menu == 2 ) {
//         let userId = prompt("Enter the user id",10);
//         let title = prompt("Enter the post title","Hello");
//         let body = prompt("Enter the post body","This is a sample post");
//         return await addPost({userId,title,body});
//     }
// }

// let opc = null;
// do {
//     opc = prompt(`
//     Select an option
//         1. Albums
//         2. Post
//         0. Exit

//     `, 1);
//     opc = Number(opc)
//     if(opc ==1) alert(JSON.stringify(await menuAlbums(), null,4));
//     if(opc ==2) alert(JSON.stringify(await menuPost(), null,4));
// } while (opc != 0);


// let opc = prompt(`
//     Select an option
//         1. Albums
//         2. Post
//         3. Comments

// `,1 );

// let menu = prompt (`
//     Album Menu
//         1. Add
//         2. Delete
//         3. SearchAll
//         4. SearchOne
//         5. UpdateAll
//         6. UpdateOne
// `,1);

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
// const albumdata = {userId:"1", title:"Ya no lo filtren"}
// console.table(await getAllAlbums());
// console.table(await getAlbum("c963"));
// console.table(await addAlbum({userId:"1", title:"Prueba filtren a Carlos"}));  
// console.table(await updateAlbum("c963", albumdata))
// console.table(await patchAlbum("c963",albumdata))
// console.table(await deleteAlbum("c963"))
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


/**
 * * Metodos para photos
 */
console.table(await getAllPhotos());
console.table(await getPhotos("e54b"));
// console.table(await addPhotos({albumId:"b597",title:"Prueba",url:"www.prueba.com",thumbnailUrl:"www.prueba.com"}));
// console.table(await updatePhotos("e54b", {albumId:"b597",title:"Prueba123213",url:"www.prue321321ba.com",thumbnailUrl:"w32131ww.prueba.com"}));
// console.table(await patchPhotos("e54b", {title:"Prueba Final"}));
console.table(await deletePhotos("e54b"));
