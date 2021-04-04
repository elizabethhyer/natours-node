const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('db connection successful');
  });

// console.log(app.get('env')); // development
// // We are in the development environment
// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // console.log(`app running on port ${port}...`);
});
