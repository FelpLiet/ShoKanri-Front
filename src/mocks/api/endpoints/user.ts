import { RouteHandler } from "miragejs/server";
import db from "../db.json" with { type: "json" };
import { Registry } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

const getLogin: RouteHandler<Registry<AnyModels, AnyFactories>> = () => {
  return db.login;
};

const getById: RouteHandler<Registry<AnyModels, AnyFactories>> = (
  _schema,
  request
) => {
  const id = Number(request.params.id);

  const user = db.user.find((entity) => entity.id === id);
  return user ?? { error: "user not found!" };
};

export default {
  getLogin,
  getById,
};
