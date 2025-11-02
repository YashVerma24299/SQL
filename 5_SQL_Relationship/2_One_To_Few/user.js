// one to few 
// In these, full details of addresses are stored in user collection
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

const userSchema = new Schema({
    username: {
        type: String
    },
    addresses: [{
        location:String,
        city:String
    }],
});
const User = model("User", userSchema);

const addUsers = async() =>{
    let user1 = new User({
        username: 'sherlockholmes',
        addresses: [
            { location: '123 Main St', city: 'New York' },
            { location: '456 Elm St', city: 'Los Angeles' }
        ]
    });

    let user2 = new User({
        username: 'JaneSmith',
        addresses: [
            { location: '789 Maple Ave', city: 'Chicago' }
        ]
    });

    await user1.save();
    await user2.save();
}
addUsers();