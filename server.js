const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:nimda123@clusterdb-1ixzb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  db= client.db("test");
  const collection =db.collection("devices");
  app.listen(3000, function () {
 })
//  client.close();
});


app.get('/', (req, res) =>
{

  var cursor = db.collection('quotes').find().toArray(function(err, result)
  {
       if (err) { return console.log(err); }
       res.render('index.ejs', {quotess: result})
  })

  // res.sendFile(__dirname + '/webroot/index.html')
})

app.get('/ines', (req, res) =>
{
  res.send('Dabdoub ... ')
})


app.get('/medmed', (req, res) =>
{
  res.sendFile(__dirname + '/webroot/home.html')
})

app.post('/quotes', (req, res) => {   db.collection('quotes').save(req.body, (err, result) => {
     if (err) return console.log(err)
     console.log('saved to database')
     res.redirect('/')
   })
 })
