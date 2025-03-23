import { createServer } from "miragejs";
import { Account, Transaction, User } from "./endpoints";

export default function () {
  createServer({
    routes() {
      this.urlPrefix = import.meta.env.SK_API_URL;

      this.get("/user/login", User.getLogin);
      this.get("/user/:id", User.getById);

      this.get("/account/:userId", Account.getAllByUserId);
      this.get("/account/:userId/:accountId", Account.getByAccountId);

      this.get("/transaction/:accountId", Transaction.getAllByAccountId);
      this.get(
        "/transaction/income/:accountId",
        Transaction.getAllIncomesByAccountId
      );
      this.get(
        "/transaction/expense/:accountId",
        Transaction.getAllExpensesByAccountId
      );
      this.get(
        "/transaction/transference/:accountId",
        Transaction.getAllTransferencesByAccountId
      );
    },
  });
}
