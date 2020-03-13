const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/database');

/**
 * Watch database
 */
db
.authenticate()
.then(res => {
  console.log('Database Connected')
})
.catch(err => console.log(err));

/**
 * Body parser middleware
 */
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/**
 * Set ejs as template engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Set static folder
 */
app.use(express.static(path.join(__dirname, 'public')));

/**`
 * Route List
 */
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

app.use(homeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
