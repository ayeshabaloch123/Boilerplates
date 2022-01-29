const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/my_database')

const Schema=mongoose.Schema;

const post=new Schema({
    title:String,
    caption:String
});
module.exports=mongoose.model('Post',post);