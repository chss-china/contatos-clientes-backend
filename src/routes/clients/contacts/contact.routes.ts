import { Router } from "express";
import {
  createContactControllers,
  deleteContactControllers,
  listContactControllers,
  updateContactControllers,
} from "../../../controllers/clients/contacts/contact.controller";
import { verifyBodyValid } from "../../../middlewares/clients/midlwareverifibody";
import {
  contactSchemaRequest,
  updateContactSchemaRequest,
} from "../../../schemas/schemasclients/schemacontacts.ts/schemacontacts";
import { verifyEmailMidd } from "../../../middlewares/clients/midlewareverififyemail";
import { verifyZipCodeMidd } from "../../../middlewares/contacts/middlewareveriffyzipcode";
import { verifyEmailMiddZiP } from "../../../middlewares/contacts/middlewareverifyemail";
import { verifyIdMiddContact } from "../../../middlewares/clients/midlewaresverifyid";
import { verifyTokenValidMidd } from "../../../middlewares/login/midlewarews.token";
import { updateVerifyNotAdmin } from "../../../middlewares/clients/midlewareAdmin";
import { updateListControllers } from "../../../controllers/clients/client.controller";
import { verifyIdMidd } from "../../../middlewares/clients/midlewareverifyidexists";
export const contactRoutes: Router = Router();
contactRoutes.post(
  "",
  verifyBodyValid(contactSchemaRequest),
  verifyEmailMiddZiP,
  verifyZipCodeMidd,
  verifyTokenValidMidd,
  createContactControllers
);
contactRoutes.patch(
  "/:id",
  verifyIdMidd,
  verifyBodyValid(updateContactSchemaRequest),
  verifyEmailMiddZiP,
  verifyZipCodeMidd,
  verifyTokenValidMidd,
  updateVerifyNotAdmin,
  updateContactControllers
);
contactRoutes.get("", listContactControllers);
contactRoutes.delete(
  "/:id",
  verifyIdMidd,
  verifyTokenValidMidd,
  updateVerifyNotAdmin,
  deleteContactControllers
);
