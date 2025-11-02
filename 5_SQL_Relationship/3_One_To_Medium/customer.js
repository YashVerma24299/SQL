// one to Medium 
// In these, full details are not stored in the main document
// Only ids or references are stored
// From ids we can get the full details
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

const orderSchema = new Schema({
    item: String,
    price: Number
});
const Order = model("Order", orderSchema);


const customerSchema = new Schema({
    name: String,
    orders:[
        {   
            // for store ids
            type: Schema.Types.ObjectId,
            ref: 'Order' // Reference to the Order model
        }
    ]
})
const Customer = model("Customer", customerSchema);



// const addOrders = async() =>{
//     let res = await Order.insertMany([
//         { item: 'Laptop', price: 1200 },
//         { item: 'Smartphone', price: 800 },
//         { item: 'Tablet', price: 500 }
//     ]);

//     let res2 = await Order.insertMany([
//         { item: 'Monitor', price: 300 },
//         { item: 'Keyboard', price: 50 },
//         { item: 'Mouse', price: 25 }
//     ]);
// }
// addOrders();


// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: 'John Doe',
//     });

//     let order1 = await Order.findOne({ item: 'Laptop' });
//     let order2 = await Order.findOne({ item: 'Smartphone' });
//     let order3 = await Order.findOne({ item: 'Tablet' });
//     let order4 = await Order.findOne({ item: 'Monitor' });
//     cust1.orders.push(order1._id, order2._id, order3._id, order4._id); // Add order IDs to the customer

//     await cust1.save();
// }
// addCustomer();


// populate orders,
// help to get full details
// from id, it access the full details 
// and returns the full details 

                //  Try Both
// const findcustomer = async () => {
//     let res = await Customer.find({});
//     console.log(res);
// }
const findcustomer = async () => {
    let res = await Customer.find({}).populate("orders");
    console.log(res);
    console.log(res[0]);
}
findcustomer();