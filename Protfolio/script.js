/*=============================Taggle iocon Navbar==========================*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*=============================scroll sections active link==========================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href=' + id + ']').classList.add('active');
            })
        }
    })
}
// ==============================Read Button====================================
function  display ()
{
  var x= document.getElementById("info");
  if(x.style.display ==="none")
  {
  x.style.display="block";
  }
  else{
    x.style.display="none";
  }
}

function  webdisplay ()
{
  var y= document.getElementById("info1");
  if(y.style.display ==="none")
  {
  y.style.display="block";
  }
  else{
    y.style.display="none";
  }
}

    /*=============================Sticky Navbar==========================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);
    /*=============================remove tagglo icon ==========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    /*=============================Scroll Reveal==========================*/
    ScrollReveal({ 
        reset: true ,
        distance: '80px',
        duration:2000,
        delay:200
    });
    ScrollReveal().reveal('.home-img,.about-img', { scale: 0.30 });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .Services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    
  /*=============================Typed js==========================*/
  var typed3 = new Typed('.multiple-text', {
    strings: ['Frontend Devloper', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, 
    loop: true
  });
  /*================================Msg==================================*/
  let msg = document.getElementsByClassName('btn')
  if(onclick==submit)
  {
    alert("Message is Sending Sucessfull");
  }
 