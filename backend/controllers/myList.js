// We import the Model to communicate with the Database
// const myList = require('../models/List')

// async function getAllTweets(req,res) {
//     const allTweets = await Tweet.find()
//     res.json(allTweets)
// }

// async function createTweets(req,res) {
//     console.log('Req Body!', req.body)
//     // Method 3
//     // Tweet.create({
//     //     name: req.body.name,
//     //     content: req.body.content
//     // })
//     Tweet.create(req.body)
//     .then(newTweet => res.json(newTweet))
//     .catch(err => res.json(err))
// }
//     // Method 2
// //     await Tweet.create({
// //         name: req.body.name,
// //         content: req.body.content
// //     })
// //     // Method 1
// //     let newTweet = new Tweet({
// //         name: req.body.name,
// //         content: req.body.content
// // })
// //     await newTweet.save()
// // }

// async function updateTweets(req, res) {

//     try {
//     await Tweet.findByIdAndUpdate(req.params._id,req.body
//          // form of req.body {content:req.body.content})

//     )
//     res.status(200).json({message:'Tweet updated Successfuly!'})
//     // res.json(updateTweet)
// } catch(err){
//     res.json(err)
//     }
// }

// async function deleteTweets(req, res) {
//     try {
//         await Tweet.findByIdAndDelete(req.params._id)
//         res.json({message: 'Tweet Deleted Successfully'})
//     } catch(err) {
//         res.json(err)
//     }
// }

// // Exporting/Sharing our functions
// module.exports = {
//     getAllTweets,
//     createTweets,
//     updateTweets,
//     deleteTweets
// }