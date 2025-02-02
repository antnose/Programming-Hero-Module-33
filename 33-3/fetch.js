// const url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function loadData() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// 33-4 Load more data, more APIs, send data to function
// function loadData() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// function loadUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => displayUsers(data));
// }

// function displayUsers(data) {
//   console.log(data);
// }

// 33-5 Dynamically display loaded data on your website

// function loadUsers2() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((a) => displayUsers2(a));
// }

// function displayUsers2(data) {
//   const ul = document.getElementById("users-list");
//   for (const user of data) {
//     const li = document.createElement("li");
//     li.innerText = user.name;
//     ul.appendChild(li);
//   }
// }

// 33-6 Load posts and display on the website with CSS

// function post() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => displayPost(data));
// }

// function displayPost(posts) {
//   const postsContainer = document.getElementById("posts-container");
//   for (const post of posts) {
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <h4>User Id- ${post.userId} </h4>
//       <h5>Post title: ${post.title} </h5>
//       <p>Post Description: ${post.body} </p>
//     `;
//     postsContainer.appendChild(div);
//     div.classList.add("post");
//   }
// }

// post();
