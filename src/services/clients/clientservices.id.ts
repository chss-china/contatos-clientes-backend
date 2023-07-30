import { TclientResponse } from "../../interfaces/clientsinterface/clientinteface";
import { Repository } from "typeorm";
import { Client } from "../../entities/clientes.entities";
import { AppDataSource } from "../../data-source";
import {
  allClientSchemaResponseGet,
  clientSchemaResponse,
} from "../../schemas/schemasclients/schemaclients";

export const listClientServiceId = async (
  id: number
): Promise<TclientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const oldClientData: Client = await clientRepository.findOneByOrFail({
    id: id,
  });

  await clientRepository.save(oldClientData);

  const returnClient: TclientResponse =
    clientSchemaResponse.parse(oldClientData);

  return returnClient;
};
