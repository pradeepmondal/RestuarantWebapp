const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

// console.log(jwt.sign(

//     {
//         username: 'admin',
//         user_id: '648d9db8128e0af4c90184eb'
//     },
//     process.env.AUTH_SECRET,

//     {
//         expiresIn: '24h'
//     }
// ))

console.log(bcrypt.hashSync('hellopass123', bcrypt.genSaltSync(10)));