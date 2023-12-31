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
import { verifyTokenValidMidd } from "../../../middlewares/login/midlewarews.token";
//import { updateVerifyNotAdmin } from "../../../middlewares/clients/midlewareAdmin";
import { updateListControllers } from "../../../controllers/clients/client.controller";
import { verifyIdMiddContact } from "../../../middlewares/clients/midlewaresverifyid";
import { verifyNotAdmin } from "../../../middlewares/clients/midlewareAdmin";
import { verifyAdmin } from "../../../middlewares/contacts/middlewareverifyadmin.contact";
import { VerifyNotAdminContact } from "../../../middlewares/contacts/verifiAdminUpdateContact";
export const contactRoutes: Router = Router();
contactRoutes.post(
  "",
  verifyBodyValid(contactSchemaRequest),
  verifyEmailMiddZiP,
  verifyZipCodeMidd,
  verifyTokenValidMidd,
  VerifyNotAdminContact,
  createContactControllers
);
contactRoutes.patch(
  "/:id",
  verifyIdMiddContact,
  verifyBodyValid(updateContactSchemaRequest),
  verifyTokenValidMidd,
  VerifyNotAdminContact,
  updateContactControllers
);
contactRoutes.get("", listContactControllers);
contactRoutes.delete(
  "/:id",
  verifyIdMiddContact,
  verifyTokenValidMidd,
  VerifyNotAdminContact,
  deleteContactControllers
);
