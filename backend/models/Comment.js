const mongoose = require ('mongoose')

const Schema = mongoose.Schema
//  Creating our Tweet Schema
const CommentModel = new Schema({
    username: {type: String, required: true},
    contents: {type: String, required: true},
  
},{
    timestamps: true
})
// Storing pur Schema as a model
const Comment = mongoose.model('Comment', CommentModel)
// Exporting our Model
module.exports = Comment