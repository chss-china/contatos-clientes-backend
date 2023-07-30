import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clientes.entities";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
export async function verifyIdMiddclient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const id: number = parseInt(req.params.id);

  const client: Client | null = await clientRepository.findOne({
    where: { id: id },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  next();
}
