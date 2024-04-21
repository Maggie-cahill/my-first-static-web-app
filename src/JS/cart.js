let label = document.getElementById('label');
let ShoppingCart = document.getElementById("shopping-cart");
let cartTitle = document.getElementById("cart-title");
let itemsListed = document.getElementById("itemsListed");

let basket = JSON.parse(localStorage.getItem("data")) || [];




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


let generateCartItems = ()=> {
    

    if(basket.length !== 0){
       
        
        cartTitle.innerHTML = `

            <h1> Shopping Cart &nbsp;<i class="fa-solid fa-basket-shopping"></i></h1> 
        

            <span> </span>
            <span class = "cart-title-bottom"> </span>
        
        `;
        ShoppingCart.style = "width: 60%;"
        cartTitle.style = "width: 100%;"
        itemsListed.style = " display: flex; flex-wrap: wrap; height:auto;"
        label.style = "width: 40%;";

        return (ShoppingCart.innerHTML = basket
            .map((x)=> {
                let {id, item} = x;
                let search = shopItemsData.find((y)=> y.id === id) || [];
                let {img,name, price } = search;
            return `
            <div class = "cart-item">
                <img width = "100" src = "${img}" alt = ""/>
                <div class = "details">

                    <div id = "y" class = "title-price-x">
                        <h4 class = "title-price"> 
                            <p> ${name} </p>
                            <p class = "cart-item-price"><b>€${price}.00</b> </p>

                        </h4>

                        <i onclick = "removeItem(${id})" id = "x" class="fa-solid fa-circle-xmark"></i>
                        </div>   
                            
                        <div class="buttons">
                            <i onclick = "decrement(${id})" id = "minus" class="fa-solid fa-minus"></i>
                            <div id=${id} class="quantity"> ${item} </div>
                            <i onclick = "increment(${id})" id = "plus" class="fa-solid fa-plus"></i>
                            
                        </div>

                        
                      
                       

                    <div class = "cart-buttons"></div>

                    <h3 class = "subtotal">Subtotal: €${item*search.price}.00</h3>
                </div>
            </div>
            `
        }).join(""))
        
    }else {
       

       cartTitle.innerHTML = ``;
       ShoppingCart.innerHTML = ``;
       label.innerHTML = `
        <div class = "EmptyCartImg">
        <img class = "EmptyCart" src = "Images/EmptyCart.png" >
        </div>
        <div class = "EmptyCartText">
        <h2> Cart is Empty </h2> 
        <a href = "Shop.html">
            <button class="shopButton" > Continue Shopping </button>
        </a>
        </div>
       `;
    }
};


generateCartItems();

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

    generateCartItems();
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
     generateCartItems();
     localStorage.setItem("data", JSON.stringify(basket));
     
     
 
     
 };

 let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
   //  console.log(search.item);
  
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
     // console.log(selectedItem.id);
    
     basket = basket.filter((x)=>x.id !== selectedItem.id);
     

     generateCartItems();
     totalAmount();
     calculation();
     localStorage.setItem("data", JSON.stringify(basket));
}


let clearCart = ()=>{
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));

}


let totalAmount = ()=> {
    if (basket.length !== 0) {
        let amount = basket.map((x)=> {
            let {item, id} = x;
            let search = shopItemsData.find((y)=> y.id === id) || [];
            return item * search.price;
            
            
        }).reduce((x,y)=> x+y, 0);
        // console.log(amount)
        let totalItems =  (basket.map((x)=>x.item).reduce((x, y)=>x+y,0 ));
       
        label.innerHTML = `
         <div class = "receipt"> 
         <h1 class = "storeReceipt"> Store Receipt </h1> <br><br>
         <h2>- Subtotal (${totalItems} Items): €${amount}.00 </h2>
         <h2>- Delivery Charge: €5.00</h2> <br><br>
         <h2 class = "totalPrice">Total Price: €${amount+5}.00 </h2>
            <button class = "checkout"> Proceed to Checkout </button>
            <button onclick = "clearCart()" class = "removeAll"> Clear Cart </button>
        </div>
        `
       
    }
    else return;
}

totalAmount();

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
