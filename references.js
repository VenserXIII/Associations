var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true})

var Post = require("./models/post"),
    User = require("./models/user")

/* User.create({
    email: "bob@gmail.com",
    name: "Bob Belcher"
}, (err, user) => {
    if(err) {console.log(err)} else {console.log(user)}
}) */

/* Post.create({
    title: "How to REEEEEEEEEEEEEEEEEEEEEEEEE",
    content: "just scream very loud or something idk"
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if(err) {console.log(err)} else {
            foundUser.posts.push(post)
            foundUser.save((err, data) => {
                if(err) {console.log(err)} else {console.log(data)}
            })
        }
    })
}) */

User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
    if(err) {console.log(err)} else {console.log(user)}
})
