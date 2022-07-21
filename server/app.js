require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(process.env.PWD, "public")));

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 7000;

function notFound(res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Not found\n");
}

const app = http.createServer((req, res) => {
  switch (req.method) {
    case "GET": {
      switch (req.url) {
        case "/home": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Home page\n");
          break;
        }
        case "/about": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("About page\n");
          break;
        }
        default: {
          notFound(res);
          break;
        }
      }

      break;
    }
    case "POST": {
      switch (req.url) {
        case "/api/admin": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Create admin request\n");
          break;
        }
        case "/api/user": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Create user request\n");
          break;
        }
        default: {
          notFound(res);
          break;
        }
      }

      break;
    }
    default: {
      notFound(res);
      break;
    }
  }
});

app.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log("something bad happened", error);
  }
  console.log(`Server is listening on  http://${HOST}:${PORT}`);
});
