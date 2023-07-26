import { TclientResponse } from "../../interfaces/clientsinterface/clientinteface";
import { Repository } from "typeorm";
import { Client } from "../../entities/clientes.entities";
import { AppDataSource } from "../../data-source";
import { allClientSchemaResponseGet } from "../../schemas/schemasclients/schemaclients";

export const listClientService = async (): Promise<TclientResponse[]> => {
  const clientrRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client = await clientrRepository.find();
  const clientResponse = allClientSchemaResponseGet.parse(client);

  return clientResponse;
};
