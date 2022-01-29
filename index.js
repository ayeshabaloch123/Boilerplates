const express = require('express')
const bodyParser = require('./middleware/bodyParser')
const monitor=require('./middleware/morgan')
const port = 5000
const route=require('./routes/mainRoute')
const app = express()
const Post=require('./config/mongoose')
const { post } = require('./routes/mainRoute')

app.use(monitor.morgan)

app.use(bodyParser.parse)

/*For Creating one record*/
//  const pst=new Post({
//   title:"Test",
//   caption:"MongoDb database!"
// })
// pst.save();


/*For Detelting one record*/
 Post.deleteOne({title:"Hello"})
.then(post=>{
  console.log(post);
})

// /*For Updating one record*/
// Post.updateOne({title:"Hello World"},{title:"Register"})
// .then(post=>{
//   console.log(post);
// })


app.use('/',route)

app.get('/',( req,res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})