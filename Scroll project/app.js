// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

$(document).ready(function () {

  const navToggle = $('.nav-toggle');
  const linksContainer = $('links-container');

  navToggle.click(function () {
    toggleNavbar();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('#nav').addClass('fixed-nav');
    }
    else {
      $('#nav').removeClass('fixed-nav');
    }

    if ($(window).scrollTop() >= 500) {
      $('a.top-link').addClass('show-link');
    }
    else {
      $('a.top-link').removeClass('show-link');
    }
  })

  const scrollLinks = document.querySelectorAll(".scroll-link");


  const links = $('li a.scroll-link ');


  links.click(function (e) {
    e.preventDefault();
    let href = e.currentTarget.getAttribute('href');
    href = href.substring(1, href.length);
    const sections = $('section');

    sections.each(function () {
      const sectionId = $(this)[0].id;
      if (sectionId == href) {

        const section_start = $(this).offset().top;
        let nav_height = $('nav').css('height');
        nav_height = parseInt(nav_height.substring(0, nav_height.length - 2));
        let scroll_pos = section_start - nav_height * 2;

        if ($('nav').hasClass('fixed-nav')) {
          scroll_pos+= nav_height;
        }

        const heightOpenNav = $('ul.links').children('li').length * 50;
        if ($('div.links-container').css('height') != "26px"){
          scroll_pos+= heightOpenNav;
        }

        toggleNavbar();
        $(document).scrollTop(scroll_pos);

      }

    })


  })


});


function toggleNavbar() {
  const heightOpenNav = $('ul.links').children('li').length * 50;
  if ($('div.links-container').css('height') == "0px")
    $('div.links-container').css('height', heightOpenNav + 'px');
  else
    $('div.links-container').css('height', '0px');
}
// ********** close links ************




// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
