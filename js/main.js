import { getAllAlbums,addAlbum } from "./module/album.js";

console.log("preuba");
console.table(await addAlbum({userId:10, title:"Prueba"}));


// // Importemus necessaria
// const listPosts = document.querySelector('#posts');

// // Definiemus functionem asynchronam
// async function fetchPosts() {
//   try {
//     // Fetchemus data ab API
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();

//     // Iteremus per data et creemus elementa HTML
//     data.forEach((post, index) => {
//       const div = document.createElement('div');
//       div.classList.add('post');
//       div.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       `;
//       listPosts.append(div);
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Invocemus functionem asynchronam
// fetchPosts();