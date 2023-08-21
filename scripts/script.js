const purchaseBtn = document.getElementById('purchase-btn');
purchaseBtn.disabled = true;

const couponBtn = document.getElementById('coupon-btn');
couponBtn.disabled = true;

function updatePrices(prodPrice){
    const totalPrice = document.getElementById('totalPrice');
    const newTotalprice = parseFloat(totalPrice.innerText) + prodPrice;
    totalPrice.innerText = newTotalprice;

    if (newTotalprice >= 200){
        couponBtn.disabled = false;
    }

    if (newTotalprice > 0){
        purchaseBtn.disabled = false;
    }

    let discountPrice = ((20/100)*newTotalprice).toFixed(2);
    const discount = document.getElementById('discount');
    const prevfinalPrice = document.getElementById('finalPrice');
    let finalPrice = parseFloat(prevfinalPrice.innerText);
    if (newTotalprice >= 200 && disc == true){
        finalPrice = newTotalprice - discountPrice;
        discount.innerText = discountPrice;
    }
    else{
        finalPrice = newTotalprice;
    }
    prevfinalPrice.innerText = finalPrice;
}


function selectItems(prodNameId, prodPriceId){
    const prodName = document.getElementById(prodNameId).innerText;
    const prodPrice = parseFloat(document.getElementById(prodPriceId).innerText);
    const display = document.getElementById('prodNameDisplay');
    const selectedProd = document.createElement('p');
    const count = display.childElementCount;
    selectedProd.innerText = (count+1)+'. '+ prodName;
    display.appendChild(selectedProd);
    updatePrices(prodPrice);
}

function checkCoupon(){
    const coupon = document.getElementById('coupon-input').value;
    if (coupon === "SELL200"){
        return disc = true;
    }
    else{
        alert('Please enter a valid coupon')
        return disc = false;
    }
}

let disc;
couponBtn.addEventListener('click', function(){
    checkCoupon();
    updatePrices(0);
})
