document.getElementById("menu-btn").addEventListener("click", function() 
{
    document.getElementById("menu").style.display = "inline";
    document.getElementById("menu-close-btn").style.display = "inline";
    document.getElementById("menu-btn").style.display = "none";
    disableScroll();
});

document.getElementById("menu-close-btn").addEventListener("click", function() 
{
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-close-btn").style.display = "none";
    document.getElementById("menu-btn").style.display = "inline";
    enableScroll();
});

function disableScroll() 
{
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() 
        {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() 
{
    window.onscroll = function() {};
}