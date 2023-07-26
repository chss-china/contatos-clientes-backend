import { Router } from "express";
import { loginUserControllers } from "../../../controllers/clients/login/login.client.controllers";
export const loginRoutes: Router = Router();

loginRoutes.post("", loginUserControllers);
