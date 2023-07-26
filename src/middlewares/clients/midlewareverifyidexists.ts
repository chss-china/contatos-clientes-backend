import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clientes.entities";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
export async function verifyIdMidd(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const id: number = parseInt(req.params.id);

  const contact: Contact | null = await contactRepository.findOne({
    where: { id: id },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  next();
}
