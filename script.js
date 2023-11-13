function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  /*----Typing Effect ----- */

  var typingEffect = new Typed(".typedText", {
    Strings : ["Designer","Youtuber"],
    loop : true,
    typespeed: 100,
    backspeed :80,
    backDelay : 2000
  }) 