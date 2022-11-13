const mongoose = require ('mongoose')

const Schema = mongoose.Schema
//  Creating our Tweet Schema
const MyListModel = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    duration: {type: String, required: true},
    agePG: {type: String, required: true},
    type: {type: String, required: true},
    cast: {type: String, required: true},
    year: {type: String, required: true},
    description: {type: String, required: true},
    
    // Associate to the models
    comments: [{
        type: Schema.Types.ObjectId,
        ref:'Comment'
        }],


    myList: [{
            type: Schema.Types.ObjectId,
            ref:'myList'
            }]
},{
    timestamps: true
})
// Storing pur Schema as a model
const MyList = mongoose.model('MyList', MyListModel)
// Exporting our Model
module.exports = MyList