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