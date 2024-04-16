let shop = document.getElementById("myUL");



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

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = ()=> {
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
            let {id,name,price,img} = x;
            let search = basket.find((x)=> x.id === id) || [];

        return `
        <div id=product-id-${id} class="shopItem">
                    <div class = "itemImage"> <img src="${img}" alt="Avatar" style="width:100%"></div>
                      <p>${name}</p>
                      <div class="price-quantity">
                        <h4><b>€${price}.00</b></h4> 
                        <div class="buttons">
                            <i onclick = "decrement(${id})" id = "minus" class="fa-solid fa-minus"></i>
                            <div id=${id} class="quantity"> ${search.item === undefined? 0 :search.item} </div>
                            <i onclick = "increment(${id})" id = "plus" class="fa-solid fa-plus"></i>
                            
                        </div>
                        
                      </div>
                      
                      
    
                  </div>
         `
        
    }).join(""));
};

generateShop();

let increment = (id) => {
   let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);

   if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
   } else {
    search.item += 1;
   }

   localStorage.setItem("data", JSON.stringify(basket));
  

   // console.log(basket);
   update(selectedItem.id);
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    
    if(search === undefined) return;
    else if(search.item === 0) return;
    else {
     search.item -= 1;
    }

    
    update(selectedItem.id);
   
    basket = basket.filter((x)=> x.item !==0);

    localStorage.setItem("data", JSON.stringify(basket));
    // console.log(basket);
    

    
};

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
   //  console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    let cartIcon2 = document.getElementById("cartAmount2");
    cartIcon.innerHTML = (basket.map((x)=>x.item).reduce((x, y)=>x+y,0 ));
    cartIcon2.innerHTML = (basket.map((x)=>x.item).reduce((x, y)=>x+y,0 ));
};

calculation();


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