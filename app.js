const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const data = require('./data');

const app = express();
const port = process.env.PORT || 8080;

const postRouter = require('./routes/post-route');

// Middleware
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', postRouter);



// render 404 page
app.all('*', (req, res) => {
  res.render('404');
});


// connect to the mongodb
mongoose.set('strictQuery', true);
mongoose
  .connect('mongodb://localhost:27017/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));

// Listennig to the port  
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
