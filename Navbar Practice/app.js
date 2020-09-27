// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

var toggled = false; 
const links = $(".links");
const navToggle = $(".nav-toggle");

navToggle.click(function(event){
    toggled = !toggled;
    if(toggled){
        links.addClass("show-links");
    }
    else{
        links.removeClass("show-links");
    }
});

