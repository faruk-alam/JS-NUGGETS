// cart example - 
let cart = [
    {
        id: 1,
        product: "laptop",
        price: 1000,
        quantity: 1
    },
    {
        id: 2,
        product: "mobile",
        price: 500,
        quantity: 2
    },
    {
        id: 3,
        product: "headphone",
        price: 100,
        quantity: 1
    },
    {
        id: 4,
        product: "watch",
        price: 200,
        quantity: 3 
    },
    {
        id: 5,
        product: "earphone",
        price: 50,
        quantity: 1
    },
    {
        id: 6,
        product: "keyboard",
        price: 100,
        quantity: 2
    },
    {
        id: 7,
        product: "mouse",
        price: 50,
        quantity: 1
    }
]
let TOTAL = cart.reduce((total, cartitem) => {
    const { price, quantity } = cartitem;
    // count items 
    total.totalItems += quantity;
    // count total amount
    total.totalAmount += price * quantity;
    return total;
}, {
    totalAmount: 0,
    totalItems: 0
});

console.log(TOTAL);


