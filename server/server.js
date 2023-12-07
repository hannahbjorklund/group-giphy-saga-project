const express = require('express');
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const gifsRouter = require('./routes/gifs.router');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('build'));

app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/gifs', gifsRouter);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
