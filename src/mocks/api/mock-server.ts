import { createServer } from "miragejs";
import account from "./endpoints/account";
import user from "./endpoints/user";
import transaction from "./endpoints/transaction";

export default function () {
  createServer({
    routes() {
      this.urlPrefix = import.meta.env.SK_API_URL;

      this.get("/user/login", user.getLogin);
      this.get("/user/:id", user.getById);

      this.get("/account/:userId", account.getAllByUserId);
      this.get("/account/:userId/:accountId", account.getByAccountId);

      this.get("/transaction/:accountId", transaction.getAllByAccountId);
      this.get(
        "/transaction/income/:accountId",
        transaction.getAllIncomesByAccountId
      );
      this.get(
        "/transaction/expense/:accountId",
        transaction.getAllExpensesByAccountId
      );
      this.get(
        "/transaction/transference/:accountId",
        transaction.getAllTransferencesByAccountId
      );
    },
  });
}
