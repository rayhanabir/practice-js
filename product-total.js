
let products = [
    {name:'shirt', price:200, quantity:2},
    {name:'mobile', price:500, quantity:4},
    {name:'pant', price:100, quantity:5},
    {name:'power bank', price:200, quantity:2},
    {name:'headphone', price:200, quantity:2},
]
let cartTotal = 0;
for(const product of products){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);