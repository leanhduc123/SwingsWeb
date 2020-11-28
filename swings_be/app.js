const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
const flash = require("connect-flash");
const multer = require("multer");

const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const errorController = require("./API/error");
const User = require("./models/users");
const Config = require("./config");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Set the body parsers for form and files
app.use(bodyParser.urlencoded({ extended: false }));

// Setup session related utilities
const store = new MongoDBStore({
  uri: Config.MONGODB_URI,
  collection: "sessions",
  // collection: "Product",
  // collection: "Order"
});
const csrfProtection = csrf();
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

// Setup locals for request
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

// Bind user to the request Object
app.use(async (req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  try {
    const user = await User.findById(req.session.user._id);
    if (!user) {
      return next();
    }
    req.user = user;
    next();
  } catch (err) {
    next(new Error(err));
  }
});

// Setup routes
app.use("/admin", adminRoutes);
app.use(productRoutes);
app.use(userRoutes);

//Control the errors
app.get("/500", errorController.get500);
app.use(errorController.get404);

app.use((error, req, res, next) => {
  // TODO: Maybe a better error handling we needed
  console.log("*** Error", error);
  res.redirect("/500");
});

// Connect to the database and start server
try {
  mongoose.connect(Config.MONGODB_URI);
  app.listen(Config.PORT);
} catch (error) {
  console.log(error);
}
