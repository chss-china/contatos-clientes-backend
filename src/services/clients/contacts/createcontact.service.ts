import { Repository } from "typeorm";
import {
  TcontactRequest,
  TcreateContact,
} from "../../../interfaces/clientsinterface/contactsinterface.ts/contact.interfcace";
import { Contact } from "../../../entities/contact.entities";
import { AppDataSource } from "../../../data-source";
import {
  contactSchemaResponse,
  contactSchemaResponseCreate,
} from "../../../schemas/schemasclients/schemacontacts.ts/schemacontacts";
import { Client } from "../../../entities/clientes.entities";

export const createContactService = async (
  Data: TcontactRequest,
  clientid: any
): Promise<TcreateContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    id: clientid,
  });

  const contact: Contact = contactRepository.create({
    ...Data,
    client: client!,
  });

  await contactRepository.save(contact);
  return contactSchemaResponseCreate.parse(contact);
};
