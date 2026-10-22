const cartShopping = document.getElementById('cart-shopping');
const productsSection = document.getElementById('products-section');
const sellsNumTotale = document.getElementById('number-sells-totale');
let countToltale = 0;
let cartShoppingBag = [];
const totalePriceCust = document.getElementById('total-price'); 
const prices = [
    {id: 1, price: 2.75},
    {id: 2, price: 4.25},
    {id: 3, price: 3.50},
    {id: 4, price: 3.50},
    {id: 5, price: 3.00},
    {id: 6, price: 4.50},
    {id: 7, price: 4.50},
    {id: 8, price: 5.25},
    {id: 9, price: 5.75},
    {id: 10, price: 4.25},
    {id: 11, price: 6.25},
    {id: 12, price: 3.75},
]


function removeAndAdd(sellsProductNum){
    sellsNumTotale.classList.remove('hidden');
    sellsNumTotale.classList.add('absolute');

    sellsProductNum.classList.remove('hidden');
    sellsProductNum.classList.add('absolute');
}

for(let i = 1; i < 13; i++){
    const addbtn = document.getElementById(`add-btn-${i}`);
    const removebtn = document.getElementById(`remove-btn-${i}`);
    const sellsProductNum = document.getElementById(`sells-product-num-${i}`);
    let count = 0;

    if(!addbtn || !removebtn || !sellsNumTotale) continue;

    addbtn.addEventListener('click', () => {

        count++;
        countToltale++;
        
        cartShoppingBag.push(i)

        let totalePrice = cartShoppingBag.reduce((sem, number) => {
            const foundItem = prices.find(item => item.id === number);
            return sem + (foundItem ? foundItem.price : 0);
        }, 0);

        totalePriceCust.textContent = `${totalePrice}$`;

        sellsNumTotale.textContent = countToltale;
        sellsProductNum.textContent = count;

        removeAndAdd(sellsProductNum);

    })

    removebtn.addEventListener('click', () => {

        count -= 1;
        countToltale -= 1;
        
        lastIndex = cartShoppingBag.lastIndexOf(i)
        if(lastIndex !== -1){
            cartShoppingBag.splice(lastIndex, 1)
        }
        
        let totalePrice = cartShoppingBag.reduce((sem, number) => {
            const foundItem = prices.find(item => item.id === number);
            return sem + (foundItem ? foundItem.price : 0);
        }, 0);

        if (count >= 0 && countToltale >= 0){

            sellsNumTotale.textContent = countToltale;
            sellsProductNum.textContent = count; 

            totalePriceCust.textContent = `${totalePrice}$`

            removeAndAdd(sellsProductNum);
        }else{
            alert('You can not reduce it any further than this !')
        }
    })
}

cartShopping.addEventListener('click', () => {

    if (productsSection.classList.contains('-right-370')) {
        productsSection.classList.remove('-right-370');
        productsSection.classList.add('right-187');
    } 
    else {
        productsSection.classList.remove('right-187');
        productsSection.classList.add('-right-370');
    }
});