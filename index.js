
let shoppingCart = [];

function addToCart(e) {
    e.preventDefault();
    
    if (name.value == '' || price.value == '' || quantity.value =='') {
        alert('Invalid item')
    } else {
        let product = {
            sku: Date.now(),
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            quantity: document.getElementById('quantity').value,
        }   
        shoppingCart.push(product);
        document.querySelector('form').reset();

        localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));

        let array = new Array();
        array = JSON.parse(localStorage.getItem('shoppingCart'));
        
        let table = document.getElementById('cartDisplay');
        let total =0;

        let row = table.insertRow();
        let td1 = row.insertCell();
        let td2 = row.insertCell();
        let td3 = row.insertCell();
        let td4 = row.insertCell();
        let td5 = row.insertCell();

        for (let i in array) {
            td1.innerHTML = array[i].sku;
            td2.innerHTML = array[i].name;
            td3.innerHTML = array[i].price;
            td4.innerHTML = array[i].quantity;
            
            let x = parseFloat(array[i].price) * parseFloat(array[i].quantity);
            
            td5.innerHTML = x;
            
            total +=x;
        }
        document.getElementById('totalRow').innerHTML = `Grand Total: ${total}`;
    }
}

// function checkOut(e) {
//     localStorage.clear();
//     shoppingCart.length=0;
// }

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click',addToCart);
    // document.getElementById('btn').addEventListener('click',checkOut);
});
