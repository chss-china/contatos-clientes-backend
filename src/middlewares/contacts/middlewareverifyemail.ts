import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errrors";
export async function verifyEmailMiddZiP(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const bodyEmail: string | undefined = req.body.email;
  if (bodyEmail) {
    const contact: Contact | null = await contactRepository.findOne({
      where: { email: bodyEmail },
    });
    if (contact) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
}
