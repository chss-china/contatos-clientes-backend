import { DeepPartial } from "typeorm";
import {
  allClientSchemaResponseGet,
  clientSchemaRequest,
  updateClientSchemaRequest,
  createClientSchema,
  clientSchemaResponse,
} from "../../schemas/schemasclients/schemaclients";
import { z } from "zod";
type TclientRequest = z.infer<typeof clientSchemaRequest>;
type TclientResponse = z.infer<typeof clientSchemaResponse>;
type Tclient = z.infer<typeof createClientSchema>;
type TclientUpdateRequest = DeepPartial<TclientRequest>;
type TclientGetList = z.infer<typeof allClientSchemaResponseGet>;

export {
  TclientUpdateRequest,
  Tclient,
  TclientResponse,
  TclientRequest,
  TclientGetList,
};