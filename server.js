const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')
const path = require('path')

const app = express()

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use(cors(corsOptions))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
console.log('PATH IS : ',path.join(__dirname, 'public', 'index.html'))
console.log('PATH IS : ',path.resolve(__dirname, 'public', 'index.html'))
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
