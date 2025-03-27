import { createServer } from "miragejs";
import { Account, Transaction, User } from "./endpoints";

export default function () {
  createServer({
    routes() {
      this.urlPrefix = import.meta.env.SK_API_URL;

      this.post("/user/register", User.register);
      this.post("/user/login", User.login);
      this.delete("/user/:id", User.remove);
      this.put("/user/:id", User.update);
      this.get("/user/:id", User.getById);

      this.post("/account/register", Account.register);
      this.put("/account/:userId/:accountId", Account.update);
      this.get("/account/:userId", Account.getAllByUserId);
      this.get("/account/:userId/:accountId", Account.getByAccountId);
      this.delete("/account/:userId/:accountId", Account.remove);

      this.get("/transaction/:accountId", Transaction.getAllByAccountId);
      this.get(
        "/transaction/income/:accountId",
        Transaction.getAllIncomesByAccountId,
      );
      this.get(
        "/transaction/expense/:accountId",
        Transaction.getAllExpensesByAccountId,
      );
      this.get(
        "/transaction/transference/:accountId",
        Transaction.getAllTransferencesByAccountId,
      );
    },
  });
}
