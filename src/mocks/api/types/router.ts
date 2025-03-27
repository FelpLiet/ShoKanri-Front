import { RouteHandler } from "miragejs/server";
import { Registry } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

export type Router = RouteHandler<Registry<AnyModels, AnyFactories>>;
