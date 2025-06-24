//Boolean Data Type 

let hasDiscountCode = true;

function discountcode() {
    if (hasDiscountCode) {  //instead of hasDiscountCode it is "" it will be false bcoz empty string is a falsy value
      console.log("discount applied to food order");
      hasDiscountCode = false
    }else {
        console.log("no discount code available");
        
    }
}

discountcode();
discountcode();



console.log(4 === 3)  // flase
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false
