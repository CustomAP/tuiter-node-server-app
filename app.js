import express from "express";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import cors from "cors";
import AuthController from "./users/auth-controller.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "https://a5--snazzy-gnome-41dbc6.netlify.app",
  }),
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
app.listen(process.env.PORT || 4000);
