const element = document.getElementById("preloader");
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];

setTimeout(function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  header.style.display = 'block';
  main.style.display = 'block';
  footer.style.display = 'block';
}, 4500);

setTimeout(function(){
  element.remove();
}, 5000);
