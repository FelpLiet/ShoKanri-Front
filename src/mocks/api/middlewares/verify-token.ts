import { Request, Response } from "miragejs";
import db from "../db.json";

export const verifyToken = (request: Request) => {
  const authHeader = request.requestHeaders.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(
      401,
      {},
      { error: "Unauthorized: Missing or malformed token" },
    );
  }
  const token = authHeader.split(" ")[1];

  if (token !== db.authToken) {
    return new Response(401, {}, { error: "Unauthorized: Invalid token" });
  }
  return null;
};
