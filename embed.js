var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true})

var postSchema = new mongoose.Schema({
    title: String,
    content: String
})
var Post = mongoose.model("Post", postSchema)

//MUST come after postSchema, as userSchema.posts references postSchema
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
var User = mongoose.model("User", userSchema)

//CREATE USER
/* var newUser = new User({
    email: "hermione.granger@hogwarts.edu",
    name: "Hermione Granger"
})
newUser.posts.push({
    title: "How to brew polyjuice potion",
    content: "Just kidding! Go to potions class!"
})
newUser.save((err, user) => {
    if(err) {err} else {user}
}) */

//CREATE POST
/* var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious!"
})
newPost.save((err, post) => {
    if(err) {err} else {post}
}) */

User.findOne({
    name: "Hermione Granger"
}, (err, user) => {
    if(err) {console.log(err)} else {
        user.posts.push({
            title: "3 Things I Hate",
            content: "Voldemort, Malfoy, Malmort Voldefoy"
        })
        user.save((err, user) => {
            if(err) {console.log(err)} else {console.log(user)}
        })
    }
})
