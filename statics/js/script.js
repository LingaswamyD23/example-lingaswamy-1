
const myslide = document.querySelectorAll('.myslide');
let counter = 1;
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function slidefun(n) {
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = 'none';
	}
	if(n > myslide.length){
	   counter = 1;
	}
	if(n < 1){
	   counter = myslide.length;
	}
	myslide[counter-1].style.display = 'block';
}

slidefun(counter);

let timer = setInterval(autoSlide, 5000);

// let menu=false;
// function hidemenu()  {  
//     console.log("hide menu function running..");
//     menu=false;
//     document.getElementById("menu-icon").style.visibility="hidden";  
// }

//slider code