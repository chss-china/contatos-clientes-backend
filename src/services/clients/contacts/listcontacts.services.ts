import { TcontactResponse } from "../../../interfaces/clientsinterface/contactsinterface.ts/contact.interfcace";
import { Repository } from "typeorm";
import { Contact } from "../../../entities/contact.entities";
import { AppDataSource } from "../../../data-source";
import { contactSchemaResponse } from "../../../schemas/schemasclients/schemacontacts.ts/schemacontacts";
import { AppError } from "../../../errrors";

export const listContactService = async (): Promise<TcontactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact = await contactRepository.find();
  const contactResponse = contactSchemaResponse.parse(contact);

  return contactResponse;
};
