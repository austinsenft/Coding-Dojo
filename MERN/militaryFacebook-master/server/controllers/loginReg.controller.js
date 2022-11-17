// const User = require('../models/user.model');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// module.exports = {
//     register: (req, res) => {
//         User.create(req.body)
//             .then(user => {
//                 res
//                     .cookie(
//                         "usertoken",
//                         jwt.sign({ id: user._id }, process.env.JWT_SECRET),
//                         {
//                             httpOnly: true,
//                         }
//                     )
//                     .json({ msg: "success!", user: user.userName });
//             })
//             .catch(err => res.json(err));
//     },
//     login: (req, res) => {
//         // console.log("We are now loggin in.")
//         // console.log(req.body)
//         User.findOne({ userName: req.body.userName })
//             .then(user => {
//                 // console.log(user)
//                 if (user == null) {
//                     res.status(400).json({ msg: "invalid login attempt" })
//                     res.cookie()
//                 } else {
//                     // console.log("We are about to bcrypt")
//                     bcrypt
//                         .compare(req.body.userPassword, user.userPassword)
//                         .then(passwordIsValid => {
//                             if (passwordIsValid === true) {
//                                 // console.log("THis is about to happen", process.env.JWT_SECRET);
//                                 res
//                                     .cookie(
//                                         "usertoken",
//                                         jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
//                                         {
//                                             httpOnly: true,
//                                         }
//                                     )
//                                     .json({ msg: "success!" });
//                             } else {
//                                 // console.log("Uhhhhhhhhhhh")
//                                 res.status(400).json({ msg: "invalid login attempt" })
//                             }
//                         })
//                         .catch(err => {
//                             console.log(err)
//                             res.status(400).json({ msg: "invalid login attempt" })
//                         })
//                 }
//             })
//             .catch(err => res.status(400).json(err.errors));
//     },
//     logout: (req, res) => {
//         res.clearCookie("usertoken");
//         res.json({ msg: "usertoken cookie cleared" });
//     },
// }
