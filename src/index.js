const path = require('path')
const express = require('express');
const router_path = require('./routes');
const mongoose = require("mongoose");
const handler = require("./handlers");
const passport = require("passport");
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();

router.use(router_path)
mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.set('views', path.join(__dirname, '/views'));
// app.use(cookieParser())
app.use(passport.initialize({}))
app.use('/public', express.static(path.join(__dirname, '/public')))
console.log(path.join(__dirname, '/public'))
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
// app.use(handler)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))

module.exports = app