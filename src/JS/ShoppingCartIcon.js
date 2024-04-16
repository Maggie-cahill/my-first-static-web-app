
		

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    let cartIcon2 = document.getElementById("cartAmount2");
    cartIcon.innerHTML = (basket.map((x)=>x.item).reduce((x, y)=>x+y,0 ));
    cartIcon2.innerHTML = (basket.map((x)=>x.item).reduce((x, y)=>x+y,0 ));
};

calculation();


let logo = document.getElementById("logo");

function activateLogo() {
    logo.innerHTML = `
    <img src = "Images/Logo2.png">
    <video class = "animatedLogo" autoplay muted loop src="logoanimation.mp4" width="300px" height="200px"></video>
    
    
    `
}

function deactivateLogo() {
    logo.innerHTML = `
    <img src = "Images/Logo2.png">
    
    `
}

const hamburger = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.hamburger i')
const dropDownMenu = document.querySelector('.dropdown_menu')
		
		hamburger.onclick = function () {
			dropDownMenu.classList.toggle('open')
			const isOpen = dropDownMenu.classList.contains('open')
		
			hamburgerIcon.classList = isOpen
			? "fa-solid fa-x"
			: "fa-solid fa-bars"
		}
