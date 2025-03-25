import db from "../db.json";
import { RegisterUserRequest, LoginUserRequest } from "../types/requests";
import { Router } from "../types/router";

export const register: Router = (_schema, request) => {
  const { name, email, password } = JSON.parse(
    request.requestBody
  ) as RegisterUserRequest;

  const newUser = {
    id: db.user.length + 1,
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    active: true,
    name,
    email,
    password,
  };

  db.user.push(newUser);

  return { id: newUser.id };
};

export const login: Router = (_schema, request) => {
  const { email, password } = JSON.parse(
    request.requestBody
  ) as LoginUserRequest;

  const user = db.user.find((entity) => entity.email == email);

  if (user === undefined || user.password !== password) {
    return { error: "credentials isn't valid!" };
  }
  return {
    userId: user.id,
    authToken: db.authToken,
  };
};
