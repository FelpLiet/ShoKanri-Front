import { Response } from "miragejs";
import db from "../db.json" with { type: "json" };
import {
  RegisterUserRequest,
  LoginUserRequest,
  UpdateUserRequest,
} from "../types/requests";
import { Router } from "../types/router";
import { verifyToken } from "../middlewares/verify-token";

export const register: Router = (_schema, request) => {
  const { name, email, password } = JSON.parse(
    request.requestBody,
  ) as RegisterUserRequest;

  const user = {
    id: db.user.length + 1,
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    active: true,
    name,
    email,
    password,
  };

  db.user.push(user);

  return { id: user.id };
};

export const login: Router = (_schema, request) => {
  const { email, password } = JSON.parse(
    request.requestBody,
  ) as LoginUserRequest;

  const user = db.user.find((entity) => entity.email == email);

  if (user === undefined || user.password !== password) {
    return new Response(400, {}, { error: "credentials isn't valid!" });
  }
  return {
    userId: user.id,
    authToken: db.authToken,
  };
};

export const remove: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const id = Number(request.params.id);

  const index = db.user.findIndex((entity) => entity.id === id);

  if (index === -1) {
    return new Response(404, {}, { error: `user with id ${id} not found!` });
  }
  db.user.splice(index, 1);

  return new Response(204);
};

export const update: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const id = Number(request.params.id);
  const { name, email } = JSON.parse(request.requestBody) as UpdateUserRequest;

  const user = db.user.find((entity) => entity.id === id);

  if (!user) {
    return new Response(404, {}, { error: `user with id ${id} not found!` });
  }
  user.name = name ?? user.name;
  user.email = email ?? user.email;
  user.updatedOn = new Date().toISOString();

  return new Response(204);
};

export const getById: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const id = Number(request.params.id);

  const user = db.user.find((entity) => entity.id === id);

  if (!user) {
    return new Response(404, {}, { error: `user with id ${id} not found!` });
  }
  return user;
};
