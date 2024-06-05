import { getAllAlbums,addAlbum } from "./module/album.js";
import { getUser, addUser, updateUser } from "./module/users.js";
import { getAllPosts, addPost, getPost} from "./module/posts.js";
import { getAllComments, addComments} from "./module/comments.js";
import { getAllTodos, addTodos} from "./module/todos.js";



console.log(await getUser({userId: 1}));


const userData = {
    userId:1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    address: {
      street: "123 Main St",
      suite: "Apt 101",
      city: "Anytown",
      zipcode: "12345",
      geo: {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    phone: "555-555-5555",
    website: "johndoe.com",
    company: {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
  };
console.log(await updateUser(userData));
// console.log(await addUser(userData));
// console.table(await addTodos({userId:10,title:"prueba",completed: true}));

// console.table(await addComments({postId:100, name:"Prueba",email:"prueba@gmail.com", body:"Prueba de contenido"}))
// console.table(await getPost({postId:1}));
// console.table(await addPost({userId:10, title:"Prueba", body:"Prueba de contenido"}))
// console.table(await getAllPosts())
// console.table(await addAlbum({userId:1, title:"Prueba"}));

