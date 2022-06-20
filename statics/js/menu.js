let show = false;
const menu = document.getElementById('btn-container');
function menu_full_size(){
    if(window.innerWidth > 890){
        menu.style.width="auto"
    }
    else if(show){
        menu.style.width = '100%';
    }else{
        menu.style.width= '0%'
    }
}

window.addEventListener('resize', menu_full_size);




function show_hide_menu(){
    if(show){
        show=false;
        menu.style.width = '0%';
    }
    else{
        show=true;
        menu.style.width= '100%'
    }
}
window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("scroll-top");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 