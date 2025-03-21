import { createServer } from "miragejs";
import db from "./db.json" with { type: "json" };

export default function () {
  createServer({
    routes() {
      this.urlPrefix = "http://localhost:8080";

      this.get("/user/login", () => {
        return db.userLogin;
      });
      this.get("/user/:id", (_schema, request) => {
        const id = Number(request.params.id);

        const user = db.user.find((entity) => entity.id === id);
        return user ?? { error: "user not found!" };
      });

      this.get("/account/:userId", (_schema, request) => {
        const userId = Number(request.params.userId);

        const accounts = db.account.filter((entity) => entity.userId === userId);
        return accounts;
      });
      this.get("/account/:userId/:accountId", (_schema, request) => {
        const userId = Number(request.params.userId);
        const accountId = Number(request.params.accountId);

        const account = db.account.find((entity) => 
          entity.id === accountId && entity.userId === userId);
        return account ?? { error: "account not found!" };
      });

      this.get("/transaction/:accountId", (_schema, request) => {
        const accountId = Number(request.params.accountId);

        const transactions = db.transaction.filter((entity) => entity.accountId === accountId);
        return transactions;
      });
      this.get("/transaction/income/:accountId", (_schema, request) => {
        const accountId = Number(request.params.accountId);

        const transactions = db.transaction.filter((entity) => 
          entity.accountId === accountId && entity.type === "income");
        return transactions;
      });
      this.get("/transaction/expense/:accountId", (_schema, request) => {
        const accountId = Number(request.params.accountId);

        const transactions = db.transaction.filter((entity) => 
          entity.accountId === accountId && entity.type === "expense");
        return transactions;
      });
      this.get("/transaction/transference/:accountId", (_schema, request) => {
        const accountId = Number(request.params.accountId);

        const transactions = db.transaction.filter((entity) => 
          entity.accountId === accountId && entity.type === "transference");
        return transactions;
      });
    },
  });
};
