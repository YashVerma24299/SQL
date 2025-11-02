//   https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design
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
    username: String,
    email: String
});
const User = model("User", userSchema);

const postSchema = new Schema({
    content: String,
    likes: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    }
})
const Post = model("Post", postSchema);


const addData = async () => {
    let user1 = new User({
        username: 'John Doe',
        email: 'john@gmail.com'
    });

    let post1 = new Post({
        content: 'This is my first post',
        likes: 10
    })
    post1.user = user1; // Set the user reference in the post
    await user1.save();
    await post1.save();
}
addData();


