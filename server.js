const express = require('express');
const dotenv = require('dotenv');
const {
  jsonMiddleware,
  morganMiddleware,
} = require('./middlewares/generic.middlewares');
const routes = require('./routes/app.routes');

dotenv.config();

const app = express();

app.use(jsonMiddleware);
app.use(morganMiddleware);

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
