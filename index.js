const cartShopping = document.getElementById('cart-shopping');
const productsSection = document.getElementById('products-section');
const sellsNum = document.getElementById('number-sells');
let count = 0;

for(let i = 1; i < 13; i++){
    const btn = document.getElementById(`order-btn-${i}`)
    const shoppingBag = []
    const products = [
      { id: 1,  name: "Espresso",           price: 2.75, image: "assets/menu1.png"  },
      { id: 2,  name: "Cappuccino",         price: 4.25, image: "assets/menu2.png"  },
      { id: 3,  name: "Turkish Coffee",     price: 3.50, image: "assets/menu3.png"  },
      { id: 4,  name: "Arabic Coffee",      price: 3.50, image: "assets/menu4.png"  },
      { id: 5,  name: "Mint Tea",           price: 3.00, image: "assets/menu5.png"  },
      { id: 6,  name: "Masala Chai",        price: 4.50, image: "assets/menu6.png"  },
      { id: 7,  name: "Cafe de Olla",       price: 4.50, image: "assets/menu7.png"  },
      { id: 8,  name: "Vietnamese Coffee",  price: 5.25, image: "assets/menu8.png"  },
      { id: 9,  name: "Chocolate milkshake", price: 5.75, image: "assets/menu9.png" },
      { id: 10, name: "Hot Chocolate",      price: 4.25, image: "assets/menu10.png" },
      { id: 11, name: "Bubble Tea",         price: 6.25, image: "assets/menu11.png" },
      { id: 12, name: "Cortado",            price: 3.75, image: "assets/menu12.png" }
    ];

    btn.addEventListener('click', () => {

        count++;
        sellsNum.textContent = count;

        sellsNum.classList.remove('hidden');
        sellsNum.classList.add('absolute');

        shoppingBag.push(i)
    })
    
    for(let j = 0; j < shoppingBag.length; j++){
        const item = `
            
        `
    }
}


cartShopping.addEventListener('click', () => {

    productsSection.classList.toggle('right-370');

})

