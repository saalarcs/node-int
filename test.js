// const names = require('./names')
// const sayHi = require('./myUtil')
// console.log(names)


// sayHi('san')
// sayHi(names.sal)
// sayHi(names.ibo)

// // OS Module
// const os = require('os')

// // infor about user
// const user = os.userInfo()
// console.log(user)

// // uptime
// console.log(`The System uptime is: ${os.uptime()} seconds`);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
//     checker: os.version(),

// }

// console.log(currentOS)


// //PATH Module

// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('\content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// //abs path
// const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')

// console.log(absolute)

// FS Module
// access method directly SYNC
// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)


// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`
// , {flag: 'a'})

// FS Module
// access method directly ASync
// const {readFile, writeFile} = require('fs')

// //call back when we are done
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     // console.log (result)
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/result-sync.txt',
//         `Here is the Result : ${first}, ${second}`
//         ,(err, result)=>{
//             if(err){
//                 return console.log(err)
//             }
//             console.log(result)
//         })
//     }
    
    
//     )
// })

// HTTP Module - allows to connect to server
// const http = require('http')

// const server = http.createServer((req, res)=>{
//     if(req.url === '/') {
//         res.end('Welcome to Our Home Page')
//     }
//     if(req.url === '/about'){
//         res.end('This is our about page')

//     }
//     res.end(`
//     <h1>OOPS!</h1>
//     <p> We can't seem to find the page you are looking for</p>
//     <a href="/"> Back home</a>
//     `)


// })

// server.listen(5000)


