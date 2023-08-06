import { Router } from "express";
import {
  createClientControllers,
  deleteListControllers,
  listClientControllers,
  listClientControllersId,
  updateListControllers,
} from "../../controllers/clients/client.controller";
import { verifyBodyValid } from "../../middlewares/clients/midlwareverifibody";
import {
  clientSchemaRequest,
  updateClientSchemaRequest,
} from "../../schemas/schemasclients/schemaclients";
import { verifyEmailMidd } from "../../middlewares/clients/midlewareverififyemail";
import { verifyIdMiddClient } from "../../middlewares/clientsandcontacts/middlewareverifyIdclientescontacts";
import { verifyTokenValidMidd } from "../../middlewares/login/midlewarews.token";

import { verifyIdMiddclient } from "../../middlewares/clients/midlewareverifyidexists";
import { verifyNotAdmin } from "../../middlewares/clients/midlewareAdmin";
export const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  verifyBodyValid(clientSchemaRequest),
  verifyEmailMidd,
  createClientControllers
);
clientRoutes.patch(
  "/:id",
  verifyIdMiddclient,
  verifyEmailMidd,
  verifyBodyValid(updateClientSchemaRequest),
  verifyTokenValidMidd,
  verifyNotAdmin,
  updateListControllers
);

clientRoutes.get("/:id", verifyIdMiddclient, listClientControllersId);
clientRoutes.get("", listClientControllers);
clientRoutes.delete(
  "/:id",
  verifyIdMiddclient,
  verifyTokenValidMidd,
  verifyNotAdmin,
  deleteListControllers
);
