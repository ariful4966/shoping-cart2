//Mobaile Price
function priceDown() {
    document.getElementById('mobileItem').value--;
    const singleAmount = singleItem('singleItem');
    backdateSpanText('mobilePrice', singleAmount);
    //subtotal
    subtotal('subTotal', -1 * singleAmount);
     //Tax
     const subtotalAmount = singleItem('subTotal');
     tax('tax',  subtotalAmount);

    //Total Balance
    const subtotalBalance = singleItem('subTotal');
    const taxBalance = singleItem('tax');
    total(subtotalBalance, taxBalance, 'total');

}
function priceUp() {
    document.getElementById('mobileItem').value++;
    const singleAmount = singleItem('singleItem');
    updateSpanText('mobilePrice', singleAmount);
    //subtotal
    subtotal('subTotal', singleAmount);
    //Tax
    const subtotalAmount = singleItem('subTotal');
    tax('tax', subtotalAmount);

     //Total Balance
     const subtotalBalance = singleItem('subTotal');
     const taxBalance = singleItem('tax');
     total(subtotalBalance, taxBalance, 'total');
    

}

// Casing Price
function caseDown() {
    document.getElementById('caseItem').value--;
    const singleAmount = singleItem('singleCase');
    backdateSpanText('casePrice', singleAmount);
    //subtotal
    subtotal('subTotal', -1 * singleAmount);
    //Tax
    const subtotalAmount = singleItem('subTotal');
    tax('tax',  subtotalAmount);

    //Total Balance
    const subtotalBalance = singleItem('subTotal');
    const taxBalance = singleItem('tax');
    total(subtotalBalance, taxBalance, 'total');

}
function caseUp() {
    document.getElementById('caseItem').value++;
    const singleAmount = singleItem('singleCase');
    updateSpanText('casePrice', singleAmount);
    //subtotal
    subtotal('subTotal', singleAmount);
    //Tax
    const subtotalAmount = singleItem('subTotal');
    tax('tax', subtotalAmount);

    //Total Balance
    const subtotalBalance = singleItem('subTotal');
    const taxBalance = singleItem('tax');
    total(subtotalBalance, taxBalance, 'total');
}
//SubTotal function
function subtotal(id, singleAmount) {
    const subtotal = singleItem(id);
    const subtotalAmount = subtotal + singleAmount;
    document.getElementById(id).innerText = subtotalAmount;
}
//Tax Function 
function tax(id, subtotalAmount){
    const taxParcent = (2*subtotalAmount)/100 ;
    document.getElementById(id).innerText = taxParcent;
}
//Total Balance
function total(subtotalBalance, taxBalance, id){
    const tatalBalance = subtotalBalance+taxBalance;
    document.getElementById(id).innerText= tatalBalance;
    
}
//Id ParseFloat Function
function singleItem(id) {
    const singleItem = document.getElementById(id).innerText;
    const singleAmount = parseFloat(singleItem);
    return singleAmount;
}

// Amount and Item Decrement
function backdateSpanText(id, number) {
    const mobilePrice = document.getElementById(id).innerText;
    const priceAmount = parseFloat(mobilePrice);
    const presentPrice = priceAmount - number;
    document.getElementById(id).innerText = presentPrice;
}
// Amount and Item Increment
function updateSpanText(id, number) {
    const mobilePrice = document.getElementById(id).innerText;
    const priceAmount = parseFloat(mobilePrice);
    const presentPrice = priceAmount + number;
    document.getElementById(id).innerText = presentPrice;
}

// Item Remove 
function mobileRemove(){
    const itemRemove= document.getElementById('mobile').style.display = 'none';
    const singleAmountRemove = singleItem('mobilePrice');
    // console.log(singleAmountRemove);
    removeSubtotal('subTotal', singleAmountRemove );
    removeTax('tax', singleAmountRemove);
    removeTotal('total',singleAmountRemove)
    
    
}
function casingRemove(){
    const itemRemove= document.getElementById('casing').style.display = 'none';
    const singleAmountRemove = singleItem('casePrice');
    removeSubtotal('subTotal', singleAmountRemove );
    removeTax('tax', singleAmountRemove);
    removeTotal('total',singleAmountRemove)
    
    
}
function removeTax(id, singleAmountRemove){
    const taxAmountRemove = singleItem(id);
    const presentTax = taxAmountRemove-(2*singleAmountRemove)/100;
    document.getElementById(id).innerText = presentTax;
}
function removeSubtotal(id, singleAmountRemove ){
    const subtotalAmountRemove = singleItem(id);
    console.log(subtotalAmountRemove);
    const presentSubtotalAmount = subtotalAmountRemove - singleAmountRemove;
    document.getElementById(id).innerText = presentSubtotalAmount;
}
function removeTotal(id,singleAmountRemove){
    const totalAmountRemove = singleItem(id);
    const presentTotal = totalAmountRemove-(singleAmountRemove+(2*singleAmountRemove)/100);
    document.getElementById(id).innerText = presentTotal;
}

