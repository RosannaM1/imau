const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
 

  burger.addEventListener('click', () => {
     // Toogle Nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
  
}


navSlide();

var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");

      function register(){
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
      }
      function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
      }
      