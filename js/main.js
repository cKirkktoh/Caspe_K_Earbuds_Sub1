// Script 1
(() => {
  // Your first script code goes here
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  function modelLoaded() {
      hotspots.forEach(hotspot => {
          hotspot.style.display = "block";
      });
  }

  function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// Script 2
(() => {
  // Your second script code goes here
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.querySelector('.nav ul');

  burgerMenu.addEventListener('click', () => {
      if (window.innerWidth <= 475) {
          if (navLinks.style.display === 'block') {
              navLinks.style.display = 'none';
              burgerMenu.classList.remove('active');
          } else {
              navLinks.style.display = 'block';
              burgerMenu.classList.add('active');
          }
      }
  });
})();

