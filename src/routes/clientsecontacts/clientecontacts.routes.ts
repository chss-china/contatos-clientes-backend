import { Router } from "express";
import {
  listClientsContactsControllers,
  listClientsContactsControllersId,
} from "../../controllers/clients/clientsandcontacts/clientandcontacts.controller";
import { verifyIdMiddClient } from "../../middlewares/clientsandcontacts/middlewareverifyIdclientescontacts";
export const clientandContactRoutes: Router = Router();
clientandContactRoutes.get("", listClientsContactsControllers);
clientandContactRoutes.get(
  "/:id/contacts",
  verifyIdMiddClient,
  listClientsContactsControllersId
);
