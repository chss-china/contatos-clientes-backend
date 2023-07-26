import { Router } from "express";
import {
  createClientControllers,
  deleteListControllers,
  listClientControllers,
  updateListControllers,
} from "../../controllers/clients/client.controller";
import { verifyBodyValid } from "../../middlewares/clients/midlwareverifibody";
import {
  clientSchemaRequest,
  updateClientSchemaRequest,
} from "../../schemas/schemasclients/schemaclients";
import { verifyEmailMidd } from "../../middlewares/clients/midlewareverififyemail";
import { verifyIdMidd } from "../../middlewares/clients/midlewareverifyidexists";
import { verifyTokenValidMidd } from "../../middlewares/login/midlewarews.token";
import { updateVerifyNotAdmin } from "../../middlewares/clients/midlewareAdmin";
export const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  verifyBodyValid(clientSchemaRequest),
  verifyEmailMidd,
  createClientControllers
);
clientRoutes.patch(
  "/:id",
  verifyIdMidd,
  verifyBodyValid(updateClientSchemaRequest),
  verifyTokenValidMidd,
  updateVerifyNotAdmin,
  updateListControllers
);
clientRoutes.get("", listClientControllers);
clientRoutes.delete(
  "/:id",
  verifyIdMidd,
  verifyTokenValidMidd,
  updateVerifyNotAdmin,
  deleteListControllers
);
