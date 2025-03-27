import db from "../db.json";
import { Router } from "../types/router";
import { verifyToken } from "../middlewares/verify-token";
import {
  RegisterAccountRequest,
  UpdateAccountRequest,
} from "../types/requests";
import { Response } from "miragejs";

export const register: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const {
    userId,
    ignoreInOverview,
    name,
    description,
    initialBalance: balance,
  } = JSON.parse(request.requestBody) as RegisterAccountRequest;

  if (db.user.some((entity) => entity.id === userId) === false) {
    return new Response(
      404,
      {},
      { error: `user with id ${userId} not found!` },
    );
  }

  const account = {
    id: db.account.length + 1,
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    active: true,
    userId,
    ignoreInOverview,
    name,
    description,
    balance,
  };
  db.account.push(account);

  return {
    id: account.id,
  };
};

export const update: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const userId = Number(request.params.userId);
  const accountId = Number(request.params.accountId);

  const account = db.account
    .filter((entity) => entity.userId === userId)
    .find((entity) => entity.id === accountId);

  if (!account) {
    return new Response(
      404,
      {},
      { error: `account with id pair <${userId},${accountId}> not found!` },
    );
  }
  const { name, description, balance } = JSON.parse(
    request.requestBody,
  ) as UpdateAccountRequest;

  account.name = name ?? account.name;
  account.description = description ?? account.description;
  account.balance = balance ?? account.balance;
  account.updatedOn = new Date().toISOString();

  return new Response(204);
};

export const getByAccountId: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const userId = Number(request.params.userId);
  const accountId = Number(request.params.accountId);

  const account = db.account
    .filter((entity) => entity.userId === userId)
    .find((entity) => entity.id === accountId);

  if (!account) {
    return new Response(
      404,
      {},
      { error: `account with id pair <${userId},${accountId}> not found!` },
    );
  }
  return account;
};

export const getAllByUserId: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const userId = Number(request.params.userId);

  if (db.user.some((entity) => entity.id === userId) === false) {
    return new Response(
      404,
      {},
      { error: `user with id ${userId} not found!` },
    );
  }

  const accounts = db.account.filter((entity) => entity.userId === userId);
  return accounts;
};

export const remove: Router = (_schema, request) => {
  const unauthorize = verifyToken(request);

  if (unauthorize) {
    return unauthorize;
  }
  const userId = Number(request.params.userId);
  const accountId = Number(request.params.accountId);

  if (db.user.some((entity) => entity.id === userId) === false) {
    return new Response(
      404,
      {},
      { error: `user with id ${userId} not found!` },
    );
  }
  const index = db.account.findIndex((entity) => entity.id === accountId);

  if (index === -1) {
    return new Response(
      404,
      {},
      { error: `account with id pair <${userId},${accountId}> not found!` },
    );
  }
  db.account.splice(index, 1);

  return new Response(204);
};
