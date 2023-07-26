import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errrors";
export async function verifyZipCodeMidd(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const bodyZip: string | undefined = req.body.zipCode;
  if (bodyZip) {
    const contact: Contact | null = await contactRepository.findOne({
      where: { zipCode: bodyZip },
    });
    if (contact) {
      throw new AppError("ZipCode already exists", 409);
    }
  }

  next();
}
