// document.querySelector(".nav_item").addEventListener('mouseover', (event) => {
//   // change opacity of other nav links that are not hovered over
//   navs = document.querySelectorAll('.nav_item');
//   console.log("hover over link");
//   for (let i = 0; i < navs.length; i++) {
//     navs[i].style.opacity = 0.5;
//   }
//   event.target.style.opacity = 1;
// });

// document.querySelector(".nav_item").addEventListener('mouseout', (event) => {
//   // change opacity of other nav links that are not hovered over
//   console.log("leave hovering state");
//   navs = document.querySelectorAll('.nav_item');
//   for (let i = 0; i < navs.length; i++) {
//     navs[i].style.opacity = 1;
//   }
// });

document.querySelector("#menu-icon").addEventListener('click', (event) => {
  console.log("open menu");
  document.getElementById("page_links").style.width = "100%";
});

document.querySelector("#close-icon").addEventListener('click', (event) => {
  console.log("close menu");
  document.getElementById("page_links").style.width = "0";
  document.body.style.backgroundColor = "white";
});