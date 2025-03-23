import { RouteHandler } from "miragejs/server";
import db from "../db.json" with { type: "json" };
import { Registry } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

const getAllByAccountId: RouteHandler<Registry<AnyModels, AnyFactories>> = (
  _schema,
  request
) => {
  const accountId = Number(request.params.accountId);

  const transactions = db.transaction.filter(
    (entity) => entity.accountId === accountId
  );
  return transactions;
};

const getAllIncomesByAccountId: RouteHandler<
  Registry<AnyModels, AnyFactories>
> = (_schema, request) => {
  const accountId = Number(request.params.accountId);

  const transactions = db.transaction.filter(
    (entity) => entity.accountId === accountId && entity.type === "income"
  );
  return transactions;
};

const getAllExpensesByAccountId: RouteHandler<
  Registry<AnyModels, AnyFactories>
> = (_schema, request) => {
  const accountId = Number(request.params.accountId);

  const transactions = db.transaction.filter(
    (entity) => entity.accountId === accountId && entity.type === "expense"
  );
  return transactions;
};

const getAllTransferencesByAccountId: RouteHandler<
  Registry<AnyModels, AnyFactories>
> = (_schema, request) => {
  const accountId = Number(request.params.accountId);

  const transactions = db.transaction.filter(
    (entity) => entity.accountId === accountId && entity.type === "transference"
  );
  return transactions;
};

export default {
  getAllByAccountId,
  getAllIncomesByAccountId,
  getAllExpensesByAccountId,
  getAllTransferencesByAccountId,
};
