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
interface TreturnLogin {
  admin: boolean;
  id: number;
  fullname: string;
  email: string;
}

export {
  TclientUpdateRequest,
  Tclient,
  TclientResponse,
  TclientRequest,
  TclientGetList,
  TreturnLogin,
};
