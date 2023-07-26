import { DeepPartial } from "typeorm";
import {
  contactSchemaRequest,
  allContactchemaResponseGet,
  contactSchemaResponse,
  updateContactSchemaRequest,
  ContactSchema,
  contactSchemaResponseCreate,
  contactSchemaResponseUpdate,
} from "../../../schemas/schemasclients/schemacontacts.ts/schemacontacts";
import { z } from "zod";
type TcontactRequest = z.infer<typeof contactSchemaRequest>;
type TcontactResponse = z.infer<typeof contactSchemaResponse>;
type TcreateContact = z.infer<typeof contactSchemaResponseCreate>;
type Tcontact = z.infer<typeof ContactSchema>;
type Tcontactupdate = DeepPartial<TcontactRequest>;
type TcontactGetList = z.infer<typeof allContactchemaResponseGet>;
type TcontactUpdateResponse = z.infer<typeof contactSchemaResponseUpdate>;

export {
  TcreateContact,
  TcontactRequest,
  TcontactGetList,
  Tcontactupdate,
  TcontactResponse,
  Tcontact,
  TcontactUpdateResponse,
};
