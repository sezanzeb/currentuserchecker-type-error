import * as express from "express";
import { join } from "path";
import { useExpressServer } from "routing-controllers";
import { User } from "./user";

const app = express();

export const apiRoutePrefix = "/api";

async function getCurrentUser(): Promise<User | null> {
  return null;
}

useExpressServer(app, {
  authorizationChecker: async () => true,
  controllers: [join(__dirname, "../controllers/*")],
  cors: true,
  currentUserChecker: async () => await getCurrentUser(),
  defaultErrorHandler: false,
  defaults: {
    paramOptions: {
      required: true,
    },
  },
  development: true,
  interceptors: [join(__dirname, "../interceptors/*")],
  middlewares: [join(__dirname, "../middlewares/*")],
  routePrefix: apiRoutePrefix,
});
