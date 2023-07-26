import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
export const updateVerifyNotAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { decoded } = res.locals;
    const id = parseInt(req.params.id);

    const contactRepository: Repository<Contact> =
      AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepository.findOne({
      relations: {
        client: true,
      },
      where: { id: id },
    });

    if (!contact) {
      throw new AppError("Contact not found", 404);
    }

    // Assuming decoded.sub contains the client ID of the logged-in user
    if (
      decoded.admin === false &&
      parseInt(decoded.sub) !== contact.client.id
    ) {
      throw new AppError("Insufficient permission", 403);
    }

    // If the user has permission, continue to the next middleware or route handler
    next();
  } catch (err) {
    // Handle errors by passing them to the error-handling middleware
    next(err);
  }
};
