let phones = [
    {name:'walton', price: 12000, storage: 32, camera: 12, ram:2},
    {name:'itel', price: 8000, storage: 22, camera: 5, ram:1},
    {name:'htc', price: 22000, storage: 64, camera: 32, ram:3},
    {name:'apple', price: 33000, storage: 88, camera: 12, ram:2},
    {name:'samsung', price:6000, storage: 32, camera: 12, ram:2},
    {name:'xaomi', price: 7000, storage: 32, camera: 12, ram:2}
]

function findCheapestPhone(phones){
    let cheapestPhone =phones[0];
    for(const phone of phones){
        if(phone.price<cheapestPhone.price){
            cheapestPhone = phone;
        }
    }
    return (cheapestPhone.name +"  is a cheapest phone");
}

let inputPhone = findCheapestPhone(phones);
console.log(inputPhone);
