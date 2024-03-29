const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

global.Game = require('./api/models/gameModel');
global.ItemArmor = require('./api/models/armorModel');
global.ItemWeapon = require('./api/models/weaponModel');

const routes = require('./api/routes/Routes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  `${process.env.DB}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);