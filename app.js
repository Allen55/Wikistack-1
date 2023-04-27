const express = require('express');
const app = express();
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/wiki', wikiRouter)
const PORT = process.env.port || 3000

app.get('/', async (req, res, next) =>{
    await res.redirect('/wiki');
});


db.authenticate() 
.then(() => { 
    console.log('connected to the database'); 
});



const init = async () => {
    await db.sync({force: true});
    // make sure that you have a PORT constant
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  }
  
  init();
