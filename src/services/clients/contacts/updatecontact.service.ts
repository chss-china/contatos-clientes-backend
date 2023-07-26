import { Repository } from "typeorm";
import {
  TcontactRequest,
  TcontactResponse,
  TcontactUpdateResponse,
  Tcontactupdate,
  TcreateContact,
} from "../../../interfaces/clientsinterface/contactsinterface.ts/contact.interfcace";
import { Client } from "../../../entities/clientes.entities";
import { AppDataSource } from "../../../data-source";
import { Contact } from "../../../entities/contact.entities";
import {
  contactSchemaResponse,
  contactSchemaResponseCreate,
  contactSchemaResponseUpdate,
} from "../../../schemas/schemasclients/schemacontacts.ts/schemacontacts";

export const updateContactService = async (
  Data: Tcontactupdate,
  id: number
): Promise<TcontactUpdateResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  //   const oldContactData: Contact | null = await contactRepository.findOneBy({
  //     id: id,
  //   });
  const contact: Contact | null = await contactRepository.findOne({
    where: { id: id },
  });

  const newContactData: Contact = contactRepository.create({
    ...contact,
    ...Data,
  });
  await contactRepository.save(newContactData);

  const returnContact: TcontactUpdateResponse =
    contactSchemaResponseUpdate.parse(newContactData);

  return returnContact;
};
