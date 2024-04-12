let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = (basket.map((x)=>x.item).reduce((x, y)=>x+y,0 ));
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