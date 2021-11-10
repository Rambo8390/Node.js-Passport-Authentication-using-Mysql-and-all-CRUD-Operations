require('dotenv').config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
// import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import session from "express-session";
import connectFlash from "connect-flash";
import passport from "passport";



const path = require('path');

let app = express();

//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

//Config view engine
configViewEngine(app);

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded());
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.resolve(__dirname, 'assets/images')))
app.use('/uploads',express.static(__dirname +"/uploads"));
// init all web routes
// initWebRoutes(app);
app.use('/' , require("./routes"));

let port = process.env.PORT || 1002;
app.listen(port, () => console.log(`Building a login system with NodeJS is running on port ${port}!`));
