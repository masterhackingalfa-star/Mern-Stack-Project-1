const cartShopping = []

const numberSells = document.getElementById('number-sells');

let count = 0;

for(let i = 1; i < 13; i++){
    const btn = document.getElementById(`order-btn-${i}`);
 
    btn.addEventListener('click', () => {
        count++;
        numberSells.textContent = count;

        numberSells.classList.remove("hidden");
        numberSells.classList.add("popup");
    })
}
