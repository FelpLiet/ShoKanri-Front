import { RouteHandler } from "miragejs/server";
import db from "../db.json" with { type: "json" };
import { Registry } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

export const getAllByUserId: RouteHandler<Registry<AnyModels, AnyFactories>> = (
  _schema,
  request
) => {
  const userId = Number(request.params.userId);

  const accounts = db.account.filter((entity) => entity.userId === userId);
  return accounts;
};

export const getByAccountId: RouteHandler<Registry<AnyModels, AnyFactories>> = (
  _schema,
  request
) => {
  const userId = Number(request.params.userId);
  const accountId = Number(request.params.accountId);

  const account = db.account.find(
    (entity) => entity.id === accountId && entity.userId === userId
  );
  return account ?? { error: "account not found!" };
};
