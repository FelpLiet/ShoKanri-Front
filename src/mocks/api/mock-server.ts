import { createServer } from "miragejs";
import db from "./db.json" with { type: "json" };

export default function () {
  createServer({
    routes() {
      this.urlPrefix = "http://localhost:8080";

      this.get("/user/login", () => {
        return db.userLogin;
      });
    },
  });
};
