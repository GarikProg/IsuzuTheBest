const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// const session = require("express-session");
const path = require("path");
// const FileStore = require("session-file-store")(session);
// const { cookiesCleaner } = require("./auth");
// const dbConnection = require("./DataBase/Database");
// app.use(morgan("dev"));
// const useMiddleware = require("./middleware");
// const adminRouter = require("./routes/admin");
// const anotherCarRouter = require("./routes/anothercar")
// const configuratorRouter = require("./routes/configurator")
// const indexRouter = require("./routes/index")
// const optionsRouter = require("./routes/options")
// const useErrorHandlers = require("./middleware/error-handlers");

const app = express();


// Подключаем импортированные маршруты с определенным url префиксом.
// app.use("/", indexRouter);

// useErrorHandlers(app);



  // Body POST запросов.
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // initialize cookie-parser to allow us access the cookies stored in the browser.
  app.use(cookieParser());

  // initialize express-session to allow us track the logged-in user across sessions.
  // app.use(
  //   session({
  //     store: new FileStore(),
  //     key: "user_sid",
  //     secret: "anything here",
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       expires: 600000
  //     }
  //   })
  // );
  // app.use(cookiesCleaner);

  // Подключаем статику
  app.use(express.static(path.join(__dirname, '..', "public")));

  // Подключаем views(hbs)
  app.set("views", path.join(__dirname, '..', "views"));
  app.set("view engine", "hbs");

  app.listen(3000, () => console.log('khkjhj'));
