import { Tclient } from "../../interfaces/clientsinterface/clientinteface";
import {
  TclientRequest,
  TclientResponse,
} from "../../interfaces/clientsinterface/clientinteface";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  createClientSchema,
  clientSchemaResponse,
} from "../../schemas/schemasclients/schemaclients";

import { Client } from "../../entities/clientes.entities";
export const createClientService = async (
  Data: TclientRequest
): Promise<TclientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client: Client = clientRepository.create(Data);
  
  await clientRepository.save(client);
  const returnClient: TclientResponse = clientSchemaResponse.parse(client);
  return returnClient;
};
